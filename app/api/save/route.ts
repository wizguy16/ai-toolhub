import { getSupabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const supabase = getSupabase();
  if (!supabase) {
    return NextResponse.json(
      { error: "Supabase is not configured" },
      { status: 503 },
    );
  }

  const { title, content } = await req.json();

  const { data, error } = await supabase
    .from("posts")
    .insert([{ title, content }]);

  if (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  return NextResponse.json({ success: true, data });
}