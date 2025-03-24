import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import openaiRoutes from "./routes/openaiRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/openai", openaiRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
