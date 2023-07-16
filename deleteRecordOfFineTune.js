import { openai } from "./api.js";

async function deleteFineTune(fineTuneId) {
  try {
    const response = await openai.deleteFineTune(fineTuneId);
    console.log("Fine-tune job deleted: ", response);
  } catch (err) {
    if (err.response && err.response.data && err.response.data.error) {
      console.log("Error deleting fine-tune job: ", err.response.data.error);
    } else {
      console.log("Error deleting fine-tune job: ", err.message);
    }
  }
}

// Replace 'YOUR_FINE_TUNE_ID' with the actual ID of the fine-tune job you want to delete
deleteFineTune("ft-oigT9qCkIjYIY3GV5q8AY64rID");
