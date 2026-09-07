import { NextResponse } from "next/server";

// Placeholder enquiry endpoint.
// Wire this up to email delivery (e.g. Resend, SES) or a CRM/webhook
// before going live. Currently it validates and logs the submission.
export async function POST(request: Request) {
  try {
    const data = await request.json();

    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 },
      );
    }

    console.log("New Sefora enquiry:", data);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Could not process the request." },
      { status: 400 },
    );
  }
}
