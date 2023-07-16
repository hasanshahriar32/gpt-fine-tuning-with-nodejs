import { openai } from "./api.js";

async function deleteFineTune() {
  try {
    const response = await openai.deleteModel(
      "davinci:ft-sj-innovation-2023-05-09-07-55-48"
    );
    console.log("response: ", response);
  } catch (err) {
    console.log("err: ", err);
  }
}

deleteFineTune();
