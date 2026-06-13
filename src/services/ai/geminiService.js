import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

export async function summarizeWithGemini(news) {

  const prompt = `
You are an elite AI industry analyst and newsletter writer.

Analyze the AI news articles provided below.

Your tasks:

1. Remove duplicate stories.
2. Select only the 5-10 most impactful stories.
3. Rank them by importance.
4. Categorize each story into one of:
   - 🚀 Model Releases
   - 💰 Funding & Business
   - 🤖 AI Agents
   - 🧠 Research & Papers
   - 🏢 Enterprise Adoption
   - 📜 Regulations & Policy

5. For each story provide:
   - A short headline
   - Why it matters (2 concise sentences)
   - Impact Level (🔥 High / ⚡ Medium / 📌 Low)

6. End with:
   - 📈 Key Trend of the Day
   - 🔮 What to Watch Next

Formatting Rules:

- Use emojis professionally.
- Use section headers.
- Use separators like:
  ━━━━━━━━━━━━━━
- Keep paragraphs short.
- Make it highly readable on mobile Telegram.
- Avoid markdown code blocks.
- Avoid excessive hype or clickbait.
- Sound like a premium AI newsletter.

Output format example:

🔥 Daily AI Brief | {today's date}

🚀 MODEL RELEASES
━━━━━━━━━━━━━━

1️⃣ Headline

📌 Why it matters:
Explanation

🎯 Impact: 🔥 High

💰 FUNDING & BUSINESS
━━━━━━━━━━━━━━

...

📈 KEY TREND OF THE DAY
One concise insight.

🔮 WHAT TO WATCH NEXT
One concise prediction.

Keep the entire response under 3000 characters.

Articles:
${JSON.stringify(news)}
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  return response.text;
}