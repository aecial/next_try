import { NextResponse } from "next/server";
import prisma from "@/lib/Prisma";
import { getServerSession } from "next-auth";
export async function POST(request) {
  const session = await getServerSession();
  const res = await request.json();
  const { num } = res;
  console.log({ res });
  const result = await prisma.notes.delete({
    where: {
      id: num,
      email: session.user.email,
    },
  });

  return NextResponse.json({ data: res });
}
