import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";
import { portfolioData } from "@/app/data/portfolio-data";

// ──────────────────────────────────────────────
//  Lightweight TF-IDF cosine-similarity retriever
// ──────────────────────────────────────────────

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
}

function termFrequency(tokens: string[]): Record<string, number> {
  const tf: Record<string, number> = {};
  for (const t of tokens) tf[t] = (tf[t] ?? 0) + 1;
  return tf;
}

function cosineSimilarity(
  queryTokens: string[],
  docTokens: string[],
  docTags: string[]
): number {
  const queryTF = termFrequency(queryTokens);
  const docTF = termFrequency([...docTokens, ...docTags]);

  // Direct tag match bonus
  let tagBonus = 0;
  for (const qt of queryTokens) {
    if (docTags.includes(qt)) tagBonus += 0.25;
  }

  const vocab = new Set([...Object.keys(queryTF), ...Object.keys(docTF)]);
  let dot = 0, qMag = 0, dMag = 0;
  for (const word of vocab) {
    const q = queryTF[word] ?? 0;
    const d = docTF[word] ?? 0;
    dot += q * d;
    qMag += q * q;
    dMag += d * d;
  }

  const base = qMag && dMag ? dot / (Math.sqrt(qMag) * Math.sqrt(dMag)) : 0;
  return base + tagBonus;
}

/** Retrieve top-k most relevant portfolio chunks for a given query */
function retrieve(query: string, topK = 4) {
  const queryTokens = tokenize(query);
  const scored = portfolioData.map((doc) => ({
    doc,
    score: cosineSimilarity(queryTokens, tokenize(doc.content), doc.tags),
  }));
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, topK).map((s) => s.doc);
}

// ──────────────────────────────────────────────
//  Route handler
// ──────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message?.trim()) {
      return NextResponse.json({ error: "Empty message" }, { status: 400 });
    }

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey || apiKey === "your_groq_api_key_here") {
      return NextResponse.json(
        { error: "GROQ_API_KEY is not configured in .env.local" },
        { status: 500 }
      );
    }

    // 1️⃣  RETRIEVE — find relevant chunks from the knowledge base
    const relevantChunks = retrieve(message);
    const context = relevantChunks
      .map((c) => `[${c.category}] ${c.content}`)
      .join("\n\n");

    // 2️⃣  AUGMENT — build a grounded system prompt
    const systemPrompt = `You are Bindhya's friendly and professional portfolio AI assistant.
Answer the user's question using ONLY the context provided below.
If the answer is not found in the context, politely say you don't have that information and suggest contacting Bindhya directly at bindhya2004ammu@gmail.com.
Keep your answers concise, warm, and professional. Never mention "context", "chunks", or "RAG" to the user.

CONTEXT:
${context}`;

    // 3️⃣  GENERATE — call Groq with llama model
    const groq = new Groq({ apiKey });

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message },
      ],
      temperature: 0.5,
      max_tokens: 512,
    });

    const answer =
      completion.choices[0]?.message?.content?.trim() ??
      "Sorry, I couldn't generate a response. Please try again.";

    return NextResponse.json({
      answer,
      retrievedChunks: relevantChunks.map((c) => c.id),
    });
  } catch (err) {
    console.error("[RAG API Error]", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
