import express from "express";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";

const app = express();

app.use(express.json());

app.use(cors());

app.get(`/`, (req, res) => {
  res.send(`Server runs well.`);
});

const ai = new GoogleGenerativeAI("AIzaSyBhSg56g06TlT9lLauSsU-vblpAXFfMKPE");

app.post("/detect-mood", async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: "Text is required" });
  }

  try {
    // Create the model and generate content
    const model = ai.getGenerativeModel({ model: "gemini-2.0-flash" });

    // The prompt for Gemini to detect emotion
    const prompt = `Analyze the following text and identify the predominant emotion or mood expressed by the user. Choose ONLY ONE emotion from this list: [Stressful, Frustrated, Sad, Angry, Anxious, Confident, Excited, Happy, Hopeful, Depressed, Overwhelmed, Calm, Annoyed, Tense].
    
    Your response must be exactly one word - the emotion you identified. Do not include any other text, explanation, or punctuation in your response.
    
    Text to analyze: "${text}"`;

    const result = await model.generateContent(prompt);
    const response = result.response.text().trim();

    return res.json({ emotion: response });
  } catch (error) {
    console.error("Error:", error);
    res
      .status(500)
      .json({ error: "Failed to analyze tone", details: error.message });
  }
});

app.listen(5000, () => {
  console.log(`Server runs on port 5000`);
});
