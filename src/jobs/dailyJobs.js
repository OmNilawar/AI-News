import { getNews } from "../services/rssService.js";
import { summarizeNews } from "../services/ai/aiService.js";
import { sendTelegram } from "../services/telegramService.js";

import { deduplicateNews } from "../utils/deduplicateNews.js";
import { formatTelegramMessage } from "../utils/formatter.js";

export async function dailyNewsJob() {
  try {
    console.log("Fetching news...");

    const news = await getNews();

    console.log(`Fetched ${news.length} articles`);

    const uniqueNews = deduplicateNews(news);

    console.log(
      `After deduplication: ${uniqueNews.length} articles`
    );

    const summary = await summarizeNews(uniqueNews);

    const message = formatTelegramMessage(summary);

    await sendTelegram(message);

    console.log("Daily AI Brief sent successfully");
  } catch (error) {
    console.error("Error running daily job:", error);
  }
}