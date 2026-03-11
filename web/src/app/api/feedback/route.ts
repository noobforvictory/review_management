import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (
    !body ||
    typeof body.slug !== "string" ||
    typeof body.rating !== "number" ||
    typeof body.message !== "string"
  ) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  // Placeholder: in the next step, connect this to Supabase (for storage)
  // and Resend (for email notifications). For now the payload is only logged
  // on the server so you can verify the funnel end-to-end in development.
  console.log("[private-feedback]", {
    slug: body.slug,
    rating: body.rating,
    message: body.message,
  });

  return NextResponse.json({ ok: true });
}

