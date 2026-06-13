import { summarizeWithGemini } from "./geminiService.js";
import { summarizeWithGroq } from "./groqService.js";

export async function summarizeNews(news) {

  try {
    return await summarizeWithGemini(news);
  } catch (error) {

    console.log("Gemini failed");

    return await summarizeWithGroq(news);
  }
}