import { NextResponse } from "next/server";
import data from "../../../data.json";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const categoryProducts = data.filter((product: any, idx: number) => {
    return product.category == params.slug;
  });

  return NextResponse.json({ categoryProducts });
}
