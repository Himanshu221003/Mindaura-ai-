const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("AIzaSyDWg4fR3BeycSKleGfLkBAZX1qSHLmyMx0");
async function run() { try { const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" }); const result = await model.generateContent("hello"); console.log(result.response.text()); } catch (e) { console.error(e); } }
run();
