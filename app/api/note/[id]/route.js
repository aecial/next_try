import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import prisma from "@/lib/Prisma";
export async function GET(request) {
  const id = Number(request.url.split("note/")[1]);
  const res = await prisma.notes.findFirst({
    where: {
      id: id,
    },
  });
  if (res !== null) {
    return NextResponse.json({ data: res });
  } else {
    return NextResponse.json({ data: "Note not Found" });
  }
}
