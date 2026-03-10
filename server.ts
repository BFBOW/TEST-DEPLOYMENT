import express from "express";
import { createServer as createViteServer } from "vite";
import fetch from "node-fetch";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Netlify Function Simulation for Brevo
  app.post("/.netlify/functions/subscribe", async (req, res) => {
    try {
      const data = req.body;

      const petSummary = Object.entries(data.pets || {})
        .filter(([_, qty]) => (qty as number) > 0)
        .map(([name, qty]) => `${name}: ${qty}`)
        .join(', ');

      const payload = {
        email: data.email,
        attributes: {
          FIRSTNAME: data.firstName,
          LASTNAME: data.lastName,
          SMS: data.phone,
          POSTAL_CODE: data.postalCode,
          AGE_RANGES: (data.ageRanges || []).join(', '),
          HOUSEHOLD_COUNT: Number(data.householdSize),
          PICKUP_OTHERS: data.pickingUpForOthers,
          DIETARY_NOTES: (data.dietaryRestrictions || []).join(', '),
          ADDITIONAL_INFO: data.additionalPreferences,
          HYGIENE_NEEDS: (data.hygieneProducts || []).join(', '),
          HYGIENE_PREFS: data.hygienePreferences,
          PET_DETAILS: petSummary || "None"
        },
        listIds: [3],
        updateEnabled: true
      };

      const brevoResponse = await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          'api-key': process.env.BREVO_API_KEY || '',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const result = await brevoResponse.json();

      if (brevoResponse.ok) {
        res.status(200).json({ message: 'Success' });
      } else {
        console.error('Brevo API Error:', result);
        res.status(brevoResponse.status).json(result);
      }

    } catch (err: any) {
      console.error('Server Error:', err);
      res.status(500).json({ error: err.message });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static("dist"));
    app.get("*", (req, res) => {
      res.sendFile("dist/index.html", { root: "." });
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
