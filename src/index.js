import "dotenv/config";

import { dailyNewsJob } from "./jobs/dailyJobs.js";

try {
  await dailyNewsJob();
  console.log("AI News Agent completed successfully.");
} catch (error) {
  console.error("AI News Agent failed:", error);
  process.exit(1);
}