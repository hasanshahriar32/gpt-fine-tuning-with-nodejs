import { openai } from "./api.js";

async function getFineTuneCost(fineTuneId) {
  try {
    const response = await openai.retrieveFineTune(fineTuneId);
    const tokensUsed =
      response?.usage?.prompt_tokens + response?.usage?.completion_tokens;
    const tokenPrice = 0.0008; // Set the token price per API pricing
    console.log(response, response?.usage?.completion_tokens);
    const cost = tokensUsed * tokenPrice;
    console.log(`Fine-tune cost: $${cost.toFixed(2)}`);
  } catch (err) {
    console.log("Error retrieving fine-tune cost: ", err.message);
  }
}

const fineTuneId = "ft-4kVp8BoqYiaIi2jopueZnub5"; // Replace with your fine-tuning job ID
getFineTuneCost(fineTuneId);
