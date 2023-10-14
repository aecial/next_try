import { NextResponse } from "next/server";
import prisma from "@/lib/Prisma";
import { getServerSession } from "next-auth";
export async function POST(request) {
  const session = await getServerSession();
  const myEmail = await session.user.email;
  const res = await request.json();
  const { note } = res;
  console.log({ res });
  const result = await prisma.notes.create({
    data: { text: note, email: myEmail },
  });
  return NextResponse.json({ data: res });
}
