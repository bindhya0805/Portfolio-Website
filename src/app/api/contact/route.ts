import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, message } = await req.json();

    if (!email || !message) {
      return NextResponse.json({ error: "Email and message are required." }, { status: 400 });
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD;

    if (!gmailUser || !gmailPass) {
      return NextResponse.json({ error: "Email service not configured." }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${gmailUser}>`,
      to: gmailUser,
      replyTo: email,
      subject: `📩 New message from ${firstName || ""} ${lastName || ""} — Portfolio`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 30px; background: #f9f9f9; border-radius: 12px;">
          <h2 style="color: #7c3aed; margin-bottom: 4px;">New Portfolio Message</h2>
          <hr style="border: none; border-top: 1px solid #ddd; margin-bottom: 24px;" />

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #666; width: 120px; font-weight: bold;">Name</td>
              <td style="padding: 8px 0;">${firstName || ""} ${lastName || ""}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; font-weight: bold;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #7c3aed;">${email}</a></td>
            </tr>
          </table>

          <div style="margin-top: 24px; background: white; border-left: 4px solid #7c3aed; padding: 20px; border-radius: 0 8px 8px 0;">
            <p style="color: #666; font-weight: bold; margin: 0 0 10px;">Message</p>
            <p style="margin: 0; line-height: 1.7; white-space: pre-line;">${message}</p>
          </div>

          <p style="color: #999; font-size: 0.8rem; margin-top: 24px; text-align: center;">
            Sent from your portfolio contact form
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Contact API Error]", err);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
