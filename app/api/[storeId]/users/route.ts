import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";

export async function GET(
    req: Request,
    { params }: { params: { storeId: string } }
  ) {
    try {
  
      if (!params.storeId) {
        return new NextResponse("Store id is required", { status: 400 });
      }
  
      const users = await prismadb.user.findMany({
       where: {
        storeId: params.storeId,
       }
      });
  
      return NextResponse.json(users);
    } catch (error) {
      console.log("[USERS_GET]", error);
      return new NextResponse("Internal error", { status: 501 });
    }
  }
