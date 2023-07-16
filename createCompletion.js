import { openai } from "./api.js";

async function createCompletion() {
  try {
    const response = await openai.createCompletion({
      model: "davinci:ft-sj-innovation-2023-05-09-07-55-48",
      prompt: "hi",
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
