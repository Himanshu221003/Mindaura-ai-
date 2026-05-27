const OpenAI = require("openai");
const openai = new OpenAI({ apiKey: "", baseURL: "https://api.groq.com/openai/v1" });
async function run() { try { const comp = await openai.chat.completions.create({ messages: [{role: "user", content: "Say hello"}], model: "llama-3.3-70b-versatile" }); console.log(comp.choices[0].message.content); } catch(e) { console.error(e); } }
run();
