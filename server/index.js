import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve frontend (dist folder)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "../dist")));

// Example API route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Backend!" });
});

// Catch-all route (send frontend)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

// Start server (local only — Vercel handles it automatically in production)
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

export default app;
