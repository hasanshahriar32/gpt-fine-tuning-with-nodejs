import { openai } from "./api.js";

import axios from "axios";

async function getFineTuneStatus(fineTuneId) {
  try {
    const response = await axios.get(
      `https://api.openai.com/v1/fine-tunes/${fineTuneId}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_KEY}`,
        },
      }
    );
    console.log("Fine-tuning job status:", response.data.status);
  } catch (err) {
    console.log(
      "Error retrieving fine-tuning job status:",
      err.response.data.error
    );
  }
}

const fineTuneId = "ft-4kVp8BoqYiaIi2jopueZnub5"; // Replace with your fine-tuning job ID
getFineTuneStatus(fineTuneId);
