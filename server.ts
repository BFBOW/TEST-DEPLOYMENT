import express from "express";
import { createServer as createViteServer } from "vite";
import { buildBrevoPayload, type SupportFormSubmission } from "./src/lib/supportSubmission";

function readListId() {
  const rawValue = process.env.BREVO_LIST_ID ?? process.env.BREVO_SUPPORT_LIST_ID;
  if (!rawValue) return undefined;
  const parsed = Number(rawValue);
  return Number.isInteger(parsed) ? parsed : undefined;
}

function validateSubmission(submission: SupportFormSubmission) {
  if (!submission.firstName?.trim()) return "First name is required.";
  if (!submission.lastName?.trim()) return "Last name is required.";
  if (!submission.email?.trim()) return "Email is required.";
  if (!submission.postalCode?.trim()) return "Postal code is required.";
  return undefined;
}

function parseBrevoResponse(responseText: string): { message?: string; [key: string]: unknown } {
  if (!responseText) return {};
  try {
    return JSON.parse(responseText);
  } catch {
    return { message: responseText };
  }
}

async function startServer() {
  const app = express();
  const port = Number(process.env.PORT ?? 3000);

  app.use(express.json());

  app.post("/api/subscribe", async (req, res) => {
    const apiKey = process.env.BREVO_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: "BREVO_API_KEY is not configured." });
    }

    try {
      const submission = req.body as SupportFormSubmission;
      const validationError = validateSubmission(submission);
      if (validationError) {
        return res.status(400).json({ error: validationError });
      }

      const payload = buildBrevoPayload(submission, readListId());

      const brevoResponse = await fetch("https://api.brevo.com/v3/contacts", {
        method: "POST",
        headers: {
          "api-key": apiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const responseText = await brevoResponse.text();
      const result = parseBrevoResponse(responseText);

      if (!brevoResponse.ok) {
        return res.status(brevoResponse.status).json({
          error: result.message ?? "Brevo rejected the submission.",
          details: result,
        });
      }

      return res.status(200).json({ message: "Support application submitted." });
    } catch (error) {
      console.error("Brevo support submission failed:", error);
      return res.status(500).json({ error: "Unable to submit the support application." });
    }
  });

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static("dist"));
    app.get("*", (_req, res) => {
      res.sendFile("dist/index.html", { root: "." });
    });
  }

  app.listen(port, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}

startServer();
