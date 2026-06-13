export function deduplicateNews(news) {
  const seen = new Set();

  return news.filter((article) => {
    const title = article.title
      ?.toLowerCase()
      .trim()
      .replace(/[^\w\s]/g, "");

    if (seen.has(title)) {
      return false;
    }

    seen.add(title);
    return true;
  });
}