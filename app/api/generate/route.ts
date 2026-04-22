import OpenAI from "openai";
import { NextResponse } from "next/server";
import { affiliates } from "@/lib/affiliates";

const affiliateKeyOptions = Object.keys(affiliates).join(", ");

export async function POST(req: Request) {
  try {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "OpenAI is not configured" },
        { status: 503 },
      );
    }
    const openai = new OpenAI({ apiKey });

    const { niche, audience, productType } = await req.json();

    if (!niche || !audience) {
      return NextResponse.json(
        { error: "niche and audience are required" },
        { status: 400 }
      );
    }

    const systemPrompt = `
You are an expert affiliate SEO writer.

Write a high-converting "Best X for Y" article.

STRICT RULES:
- Return ONLY valid JSON (no markdown, no explanation)
- Keep intro under 80 words
- Each review must be concise but persuasive
- Focus on conversion (user should want to click)
- Each review may include optional "affiliateKey" when the tool matches a known program id: ${affiliateKeyOptions}. Omit "affiliateKey" when unknown. Always keep "affiliateLinkPlaceholder" as a placeholder like [[AFFILIATE_LINK_1]] (not a real URL).
- When the comparison table has an outbound "Action" (or similar) column, you may add "rowAffiliateIds" parallel to "rows" using the same affiliate ids.

JSON FORMAT:
{
  "title": "",
  "intro": "",
  "comparisonTable": {
    "headers": ["Tool", "Best For", "Price", "Rating"],
    "rows": [],
    "rowAffiliateIds": []
  },
  "reviews": [
    {
      "name": "",
      "description": "",
      "pros": [],
      "cons": [],
      "cta": "Short persuasive CTA",
      "affiliateLinkPlaceholder": "[[AFFILIATE_LINK_1]]"
    }
  ],
  "faq": [
    {
      "question": "",
      "answer": ""
    }
  ],
  "verdict": ""
}

CONTEXT:
- Niche: ${niche}
- Audience: ${audience}
- Product type: ${productType || "tools/apps"}
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        {
          role: "user",
          content: `Write a detailed article for ${audience} in ${niche}.`,
        },
      ],
      temperature: 0.6,
    });

    const text = completion.choices[0].message.content || "";

    let parsed;

    try {
      parsed = JSON.parse(text);
    } catch {
      return NextResponse.json(
        {
          error: "AI response parsing failed",
          raw: text,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(parsed);
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Server error" },
      { status: 500 }
    );
  }
}