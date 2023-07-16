import { openai } from "./api.js";

async function cancelFineTune(fineTuneId) {
  try {
    const response = await openai.cancelFineTune(fineTuneId);
    console.log("Fine-tune job canceled: ", response);
  } catch (err) {
    console.log("Error canceling fine-tune job: ", err.response.data.error);
  }
}

// Replace 'YOUR_FINE_TUNE_ID' with the actual ID of the fine-tune job you want to cancel
cancelFineTune("ft-2x458uVu8pFtGLRzith307P7");
