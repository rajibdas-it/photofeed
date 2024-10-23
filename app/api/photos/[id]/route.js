import { NextResponse } from "next/server"

const { getPhotoById } = require("@/lib/image-data")

export async function GET(request, { params }) {
    const photoId = params.id
    const photo = await getPhotoById(photoId)

    return NextResponse.json(photo)

}

