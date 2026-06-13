import axios from "axios";

export async function sendTelegram(message) {

  await axios.post(
    `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      chat_id: process.env.TELEGRAM_CHAT_ID,
      text: message
    }
  );

}