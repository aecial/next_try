import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function POST(request) {
  const res = await request.json();
  const { note } = res;
  console.log({ res });
  const result = await prisma.notes.create({ data: { text: note } });
  return NextResponse.json({ data: res });
}
