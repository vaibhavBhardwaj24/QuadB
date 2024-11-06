import dotenv from "dotenv";
import { app } from "./app.js";
console.log("starting");
dotenv.config({ path: ".env" });
import { neon } from "@neondatabase/serverless";
export const sql = neon(process.env.DATABASE_URL);

app.listen(process.env.PORT, () => {
  console.log("server started");
});
