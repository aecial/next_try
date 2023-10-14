import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import prisma from "@/lib/Prisma";
import { getServerSession } from "next-auth";
export async function GET(request) {
  const session = await getServerSession();
  const res = await prisma.notes.findMany({
    where: {
      email: session.user.email,
    },
  });

  return NextResponse.json({ notes: res });
}
