import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import express from "express";
import cors from "cors";

import { router } from "./routes/mail.Routes.js";
import { errorHandler } from "./middleware/error.Middleware.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", router);

// Test Route
app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

// Error Middleware (LAST)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
