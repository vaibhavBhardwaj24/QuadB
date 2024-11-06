import cors from "cors";
import e from "express";
import { sql } from "./index.js";
const app = e();
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use("/setData", async (req, res) => {
  try {
    const response = await fetch("https://api.wazirx.com/api/v2/tickers", {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("error");
    }

    const cryptoData = await response.json();

    const itemsArray = Object.values(cryptoData);

    const top10Items = itemsArray.slice(0, 10);
    for (const item of top10Items) {
      const res =
        await sql`INSERT INTO top_10_cryptos (name, last, buy, sell, volume, base_unit) VALUES
         ( ${item.name},
          ${item.last},
         ${item.buy},
          ${item.sell},
          ${item.volume},
          ${item.base_unit})
        RETURNING *`;
      console.log(res);
    }

    res.status(200).json(top10Items);
  } catch (error) {
    console.error("Error ", error);
    res.status(500).json({ error: error });
  }
});
app.use("/getData", async (req, res) => {
  try {
    const resa = await sql`SELECT * FROM top_10_cryptos LIMIT 10`;
    res.status(200).json(resa).send();
  } catch (error) {
    console.error("Error", error);
    res.status(500).json({ error: error });
  }
});
export { app };
// name, last, buy, Sell, volume, base_unit;
