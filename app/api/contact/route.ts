import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const { name, email, org, message } = await req.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Send notification to AA Secured IT
    await resend.emails.send({
      from: "AA Secured IT Solutions <noreply@aasecuredit.com>",
      to: ["service@aasecuredit.com"],
      replyTo: email,
      subject: `New inquiry from ${name}${org ? ` (${org})` : ""}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #0B2748; border-bottom: 2px solid #2775E6; padding-bottom: 8px;">
            New Contact Form Submission
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #64748B; width: 120px;">Name</td>
              <td style="padding: 8px 12px; color: #0B2748;">${name}</td>
            </tr>
            <tr style="background: #F0F4F8;">
              <td style="padding: 8px 12px; font-weight: bold; color: #64748B;">Email</td>
              <td style="padding: 8px 12px; color: #0B2748;">
                <a href="mailto:${email}" style="color: #2775E6;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #64748B;">Organization</td>
              <td style="padding: 8px 12px; color: #0B2748;">${org || "Not provided"}</td>
            </tr>
          </table>
          <div style="background: #F0F4F8; border-radius: 8px; padding: 16px; margin-top: 12px;">
            <p style="font-weight: bold; color: #64748B; margin: 0 0 8px;">Message:</p>
            <p style="color: #0B2748; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #94A3B8; font-size: 12px; margin-top: 24px;">
            Sent from the aasecuredit.com contact form
          </p>
        </div>
      `,
    });

    // Send confirmation to the person who submitted
    await resend.emails.send({
      from: "AA Secured IT Solutions <noreply@aasecuredit.com>",
      to: [email],
      subject: "We received your message — AA Secured IT Solutions",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #0B2748;">Thank you, ${name}.</h2>
          <p style="color: #334155; line-height: 1.6;">
            We received your inquiry and will get back to you within one business day.
          </p>
          <p style="color: #334155; line-height: 1.6;">
            If your matter is urgent, you can reach us directly at
            <a href="tel:+15712069260" style="color: #2775E6;">(571) 206-9260</a>.
          </p>
          <hr style="border: none; border-top: 1px solid #E2E8F0; margin: 24px 0;" />
          <p style="color: #94A3B8; font-size: 12px;">
            AA Secured IT Solutions LLC<br/>
            Fredericksburg, Virginia<br/>
            <a href="https://aasecuredit.com" style="color: #2775E6;">aasecuredit.com</a>
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
