import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const formLink = process.env.GOOGLE_FORM_LINK;
  const notifyEmail = process.env.CONTACT_NOTIFICATION_EMAIL;
  const fieldIdName = process.env.GOOGLE_FORM_FIELD_ID_NAME;
  const fieldIdEmail = process.env.GOOGLE_FORM_FIELD_ID_EMAIL;
  const fieldIdMessage = process.env.GOOGLE_FORM_FIELD_ID_MESSAGE;
  const fieldIdSocial = process.env.GOOGLE_FORM_FIELD_ID_SOCIAL;

  if (!formLink || !notifyEmail) {
    return new NextResponse("Please configure the env variables", {
      status: 500,
    });
  }

  try {
    const body = await req.json();
    const { name, message, social, email } = body;

    // Send to Google Form
    await fetch(
      `${formLink}/formResponse?${fieldIdName}=${name}&${fieldIdEmail}=${email}&${fieldIdMessage}=${message}&${fieldIdSocial}=${social}`
    );

    // Send Email Notification
   const emailresponse =    await resend.emails.send({
        from: "Majid Misger Portfolio <onboarding@resend.dev>", // Replace with your domain later
        to: notifyEmail,
        subject: "📬 New Message via Majid Misger Portfolio",
        html: `
          <div style="font-family: Arial, sans-serif; padding: 16px; border: 1px solid #eee; border-radius: 8px;">
            <h2 style="color: #2c3e50;">New Contact Submission</h2>
            <p style="margin: 0 0 8px;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 0 0 8px;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 0 0 8px;"><strong>Social:</strong> ${social}</p>
            <p style="margin: 0 0 8px;"><strong>Message:</strong></p>
            <p style="background: #f9f9f9; padding: 12px; border-left: 4px solid #0070f3; margin-top: 4px;">${message}</p>
      
            <hr style="margin-top: 24px;">
            <footer style="font-size: 12px; color: #999;">
              You received this email from the portfolio contact form of <strong>majidmisger.com</strong>.
            </footer>
          </div>
        `,
      });
    if (emailresponse.error) {
      console.error("❌ Email failed to send:", emailresponse.error);
    } else {
      console.log("✅ Email sent successfully:", emailresponse);
    }
    return NextResponse.json({ message: "Success!" });
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
