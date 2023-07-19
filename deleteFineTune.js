import { openai } from "./api.js";

async function deleteFineTune() {
  try {
    const response = await openai.deleteModel(
      "curie:ft-sj-innovation-2023-07-18-07-12-13"
    );
    console.log("response: ", response);
  } catch (err) {
    console.log("err: ", err);
  }
}

deleteFineTune();
