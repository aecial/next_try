import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import prisma from "@/lib/Prisma";
export async function GET(request) {
  const res = await prisma.notes.findMany();

  return NextResponse.json({ notes: res });
}
