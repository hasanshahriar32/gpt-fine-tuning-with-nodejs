import { openai } from "./api.js";
import { fileId } from "./fileId.js";

async function createFineTune() {
  try {
    const response = await openai.createFineTune({
      training_file: fileId,
      model: "curie:ft-sj-innovation-2023-07-19-18-47-10",
      batch_size: 1, // Set the desired batch size
      prompt_loss_weight: 0.01,
      learning_rate_multiplier: 0.1, // Set the desired learning rate
      n_epochs: 1, // Set the desired number of epochs
    });
    console.log("response: ", response);
  } catch (err) {
    console.log("error: ", err.response.data.error);
  }
}

createFineTune();
