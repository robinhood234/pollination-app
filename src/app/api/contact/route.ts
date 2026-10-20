import { Resend } from "resend";

const recipient = "robinwanjiru.developer@gmail.com";
const sender = "onboarding@resend.dev";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: Record<string, unknown>;

  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = typeof payload.name === "string" ? payload.name.trim().slice(0, 120) : "";
  const email = typeof payload.email === "string" ? payload.email.trim().slice(0, 254) : "";
  const message = typeof payload.message === "string" ? payload.message.trim().slice(0, 5000) : "";
  const isProductEnquiry = payload.formType === "product";
  const productName = typeof payload.productName === "string"
    ? payload.productName.trim().replace(/[\r\n]/g, " ").slice(0, 120)
    : "";

  if (!name || !emailPattern.test(email) || !message || (isProductEnquiry && !productName)) {
    return Response.json({ error: "Please provide a name, valid email, and message." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json({ error: "Email delivery is not configured." }, { status: 503 });
  }

  const subject = isProductEnquiry ? `Product enquiry: ${productName}` : "New contact form message";
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    isProductEnquiry ? `Product: ${productName}` : null,
    "",
    "Message:",
    message,
  ].filter((line): line is string => line !== null).join("\n");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: sender,
      to: recipient,
      replyTo: email,
      subject,
      text,
    });

    if (error) {
      console.error("Resend contact email failed", error);
      return Response.json({ error: "We could not send your message. Please try again." }, { status: 502 });
    }

    return Response.json({ sent: true });
  } catch (error) {
    console.error("Unable to send contact email", error);
    return Response.json({ error: "We could not send your message. Please try again." }, { status: 500 });
  }
}