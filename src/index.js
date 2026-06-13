import "dotenv/config";
import cron from "node-cron";

import { dailyNewsJob } from "./jobs/dailyJobs.js";

// Run immediately for testing
await dailyNewsJob();

// Every day at 8 AM IST
cron.schedule(
  "0 8 * * *",
  async () => {
    console.log("Running scheduled AI briefing...");

    await dailyNewsJob();
  },
  {
    timezone: "Asia/Kolkata",
  }
);

console.log("AI News Agent is running...");