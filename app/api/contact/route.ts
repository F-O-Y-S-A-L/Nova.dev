import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const { CONTACT_EMAIL } = process.env;

    if (!CONTACT_EMAIL) {
      return NextResponse.json({
        success: true,
        message: "Message logged (Resend not configured).",
        simulated: true,
      });
    }

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: CONTACT_EMAIL,
      subject: `New Contact Mission: ${name}`,
      html: `
      <div style="font-family: 'Inter', sans-serif; max-width: 720px; margin: auto; padding: 48px; border-radius: 20px; background: #0d0d0d; color: #ffffff; box-shadow: 0 20px 50px rgba(0,0,0,0.6);">

  <!-- Tag -->
  <div style="background: rgba(255,255,255,0.08); color: #ffffff; padding: 10px 18px; border-radius: 999px; display: inline-block; font-size: 11px; font-weight: 700; letter-spacing: 0.15em; margin-bottom: 24px;">
    NEW MESSAGE
  </div>

  <!-- Heading -->
  <h1 style="font-size: 36px; font-weight: 800; letter-spacing: -0.03em; margin-bottom: 10px;">
    Message <span style="color: #00ffd1;">Received</span>
  </h1>

  <p style="color: #a0a0a0; font-size: 14px; margin-bottom: 32px;">
    A new message has arrived from <strong style="color:#ffffff;">${name}</strong>
  </p>

  <!-- Message Box -->
  <div style="background: #161616; padding: 28px; border-radius: 16px; margin-bottom: 30px; border: 1px solid rgba(255,255,255,0.06);">
    
    <p style="color: #777; font-size: 11px; font-weight: 700; letter-spacing: 0.12em; margin-bottom: 12px;">
      MESSAGE
    </p>

    <p style="font-size: 16px; line-height: 1.7; color: #e6e6e6; margin: 0;">
      ${message}
    </p>

  </div>

  <!-- Sender Info -->
  <div style="font-size: 13px; color: #b5b5b5; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 20px;">
    <p style="margin-bottom: 6px;"><strong style="color:#ffffff;">Name:</strong> ${name}</p>
    <p style="margin: 0;"><strong style="color:#ffffff;">Email:</strong> ${email}</p>
  </div>

  <!-- Footer -->
  <div style="margin-top: 40px; text-align: center;">
    <p style="font-size: 11px; color: #555; letter-spacing: 0.1em;">
      © 2026 • Portfolio System
    </p>
  </div>

</div>
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json(
        { error: "Failed to launch message via Resend." },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Message launched successfully",
      id: data?.id,
    });
  } catch (error: any) {
    console.error("Contact API Internal Error:", error);
    return NextResponse.json(
      { error: "Sector interference. Protocol failed." },
      { status: 500 },
    );
  }
}
