import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body as {
      name?: string;
      email?: string;
      message?: string;
    };

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    // NOTE: this is a placeholder handler. On Vercel, this route runs as a
    // serverless function. Wire it up to a real email/notification service
    // (e.g. Resend, SendGrid, or a database) by replacing this console.log
    // with an actual send call. Keep the request/response shape the same
    // and the frontend form will keep working unchanged.
    console.log("New portfolio contact message:", { name, email, message });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 }
    );
  }
}
