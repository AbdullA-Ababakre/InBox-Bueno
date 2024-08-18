import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request) {
  try {
    const { apiKey, pubId } = await request.json();

    // Process the inputs (e.g., save to database, call another API, etc.)
    // For demonstration, we'll just return the inputs back

    const response = await axios.get(
      `https://api.beehiiv.com/v2/publications/${pubId}/subscriptions`,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    return NextResponse.json({ success: true, data: response.data });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
