import axios from "axios";
import { openai } from "./api.js"; // Use require instead of import for Node.js
const apiKey = process.env.OPENAI_KEY; // Replace with your OpenAI API key

async function getFineTuneCost(fineTuneId) {
  try {
    const response = await axios.get(
      `https://api.openai.com/v1/fine-tunes/${fineTuneId}/usage`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      const { usage } = response.data;
      const tokenPrice = 0.0008; // Set the token price per API pricing
      const tokensUsed = usage.prompt_tokens + usage.completion_tokens;
      const cost = tokensUsed * tokenPrice;
      console.log(`Fine-tune cost: $${cost.toFixed(2)}`);
    } else {
      console.log(
        "Unable to retrieve fine-tuning cost. Invalid response status."
      );
    }
  } catch (err) {
    console.log("Error retrieving fine-tune cost: ", err.message);
  }
}

const fineTuneId = "ft-DBmsDR30NzCc48in3Giibslm"; // Replace with your fine-tuning job ID
getFineTuneCost(fineTuneId);
