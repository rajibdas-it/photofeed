import { getAllPhotos } from "@/lib/image-data";
import { NextResponse } from "next/server";

export async function GET(request) {
    // console.log(request.headers.get('accept-language'));
    // console.log(request.URL);
    const data = await getAllPhotos()
    return NextResponse.json(data)
}