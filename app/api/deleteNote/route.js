import { NextResponse } from "next/server";
import prisma from "@/lib/Prisma";
export async function POST(request) {
  const res = await request.json();
  const { num } = res;
  console.log({ res });
  const result = await prisma.notes.delete({
    where: {
      id: num,
    },
  });

  return NextResponse.json({ data: res });
}
