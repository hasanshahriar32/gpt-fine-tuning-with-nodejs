import { openai } from "./api.js";

async function createCompletion() {
  try {
    const response = await openai.createCompletion({
      model: "davinci:ft-sj-innovation-2023-07-16-08-32-19",
      prompt: "What is Lens Protocol",
      max_tokens: 200,
    });
    if (response.data) {
      console.log("choices: ", response.data.choices);
    }
  } catch (err) {
    console.log("err: ", err);
  }
}

createCompletion();
