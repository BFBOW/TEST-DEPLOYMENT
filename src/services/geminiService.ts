import { GoogleGenAI, Type } from "@google/genai";

let ai: GoogleGenAI | null = null;

function getAI(): GoogleGenAI {
  if (!ai) {
    ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "placeholder" });
  }
  return ai;
}

export const geminiService = {
  generateDevotional: async (topic: string) => {
    try {
      const response = await getAI().models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Generate a biblical devotional about: ${topic}. 
        Include a title, a relevant Bible verse (including the book, chapter, and verse citation), the main content, a reflection question, and a short prayer.`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              verse: { type: Type.STRING },
              content: { type: Type.STRING },
              reflection: { type: Type.STRING },
              prayer: { type: Type.STRING },
            },
            required: ["title", "verse", "content", "reflection", "prayer"],
          },
        },
      });

      return JSON.parse(response.text || "{}");
    } catch (error) {
      console.error("Error generating devotional:", error);
      return {
        title: "A Moment of Peace",
        verse: "Be still, and know that I am God. — Psalm 46:10",
        content: "In the busyness of life, it's easy to lose sight of God's presence. Take a moment today to simply be still and remember that He is in control.",
        reflection: "What is one thing you can release to God today?",
        prayer: "Lord, help me to find rest in Your presence and trust in Your plan. Amen.",
      };
    }
  },
};
