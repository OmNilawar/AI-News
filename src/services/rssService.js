import Parser from "rss-parser";
import { feeds } from "../config/feeds.js";

const parser = new Parser();

export async function getNews() {
  const allNews = [];

  for (const feed of feeds) {
    try {
      const data = await parser.parseURL(feed);

      const articles = data.items.slice(0, 5).map(item => ({
        title: item.title,
        link: item.link,
        summary: item.contentSnippet || ""
      }));

      allNews.push(...articles);
    } catch (err) {
      console.log(err.message);
    }
  }

  return allNews;
}