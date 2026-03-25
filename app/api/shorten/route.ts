import { NextResponse } from "next/server";

interface TinyUrlResponse {
  data: {
    tiny_url: string
  }
  errors?: any[]
}

export async function POST(request: Request) {
  try {
    const {url} = await request.json();

    if (!url) {
      return NextResponse.json(
        {error: "Please add a link"},
        {status: 400}
      )
    }

    const response = await fetch("https://api.tinyurl.com/create", {
      method: "POST",
      headers:{
        Authorization: `Bearer ${process.env.TINYURL_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: url,
        domain: "tinyurl.com",
      })
    })

    const data: TinyUrlResponse = await response.json()
      return NextResponse.json({
      shortUrl: data.data.tiny_url
    })
    
  } catch (error) {
    return NextResponse.json (
      {error:  "server error"},
      {status: 500},
    )
  }
}