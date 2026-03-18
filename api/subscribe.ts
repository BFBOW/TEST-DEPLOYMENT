import { buildBrevoPayload, type SupportFormSubmission } from "../src/lib/supportSubmission";

function readListId() {
  const rawValue = process.env.BREVO_LIST_ID ?? process.env.BREVO_SUPPORT_LIST_ID;
  if (!rawValue) return undefined;
  const parsed = Number(rawValue);
  return Number.isInteger(parsed) ? parsed : undefined;
}

function parseBody(body: unknown) {
  if (typeof body === "string") return JSON.parse(body) as SupportFormSubmission;
  return (body ?? {}) as SupportFormSubmission;
}

function parseBrevoResponse(responseText: string): { message?: string; [key: string]: unknown } {
  if (!responseText) return {};
  try {
    return JSON.parse(responseText);
  } catch {
    return { message: responseText };
  }
}

function validateSubmission(submission: SupportFormSubmission) {
  if (!submission.firstName?.trim()) return "First name is required.";
  if (!submission.lastName?.trim()) return "Last name is required.";
  if (!submission.email?.trim()) return "Email is required.";
  if (!submission.postalCode?.trim()) return "Postal code is required.";
  return undefined;
}

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed." });
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "BREVO_API_KEY is not configured." });
  }

  try {
    const submission = parseBody(req.body);
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
}
