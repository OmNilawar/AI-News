import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

export async function summarizeWithGemini(news) {

  const prompt = `
You are an AI industry analyst.

Analyze the articles.

Tasks:
1. Remove duplicates.
2. Pick top 5 stories.
3. Explain each in 2 sentences.
4. Keep the entire response under 2500 characters.
5. Format for Telegram.

Articles:
${JSON.stringify(news)}
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  return response.text;
}