import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth()
    
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 })
    }
  } catch (error) {
    console.log('[STORES_POST]', error);
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}