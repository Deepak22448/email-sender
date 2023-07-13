import express from "express";
import "dotenv/config";
import { sendMail } from "./email/index.js";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.post("/send-mail", sendMail);

app.listen(PORT, () => {
  console.log(`nodemailerProject is listening at http://localhost:${PORT}`);
});
