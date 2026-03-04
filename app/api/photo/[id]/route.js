import { getPhotoById } from "@/lib/image-data";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = await params;
  const data = await getPhotoById(id);
  return NextResponse.json(data);
}
