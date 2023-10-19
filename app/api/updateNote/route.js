import { NextResponse } from "next/server";
import prisma from "@/lib/Prisma";
import { getServerSession } from "next-auth";
export async function PUT(request) {
  const session = await getServerSession();
  const res = await request.json();
  const { num, msg } = res;
  console.log({ res });
  const result = await prisma.notes.update({
    where: {
      id: num,
      email: session.user.email,
    },
    data: {
      text: msg,
    },
  });

  return NextResponse.json({ data: res });
}
