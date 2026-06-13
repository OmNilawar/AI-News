import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

export async function summarizeWithGroq(news) {

  const completion = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      {
        role: "user",
        content: `
Analyze these AI news articles and produce a daily briefing.

${JSON.stringify(news)}
`
      }
    ]
  });

  return completion.choices[0].message.content;
}