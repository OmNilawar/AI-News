export function formatTelegramMessage(summary) {
  return `
🔥 Daily AI Brief

📅 ${new Date().toLocaleDateString("en-IN")}

${summary}

---
Generated automatically 🤖
`;
}