import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (
    !body ||
    typeof body.name !== "string" ||
    !body.name ||
    typeof body.phone !== "string" ||
    !body.phone ||
    typeof body.message !== "string" ||
    !body.message ||
    typeof body.email !== "string" ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)
  ) {
    return NextResponse.json(
      { detail: "Please fill all fields with a valid email." },
      { status: 400 }
    );
  }

  return NextResponse.json({ ok: true });
}
