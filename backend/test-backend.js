async function run() {
  try {
    // 1. register user to get token
    const rand = Math.random();
    const res1 = await fetch("http://127.0.0.1:3001/auth/register", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Test", email: "test"+rand+"@example.com", password: "password123" })
    });
    // 2. login
    const res2 = await fetch("http://127.0.0.1:3001/auth/login", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "test"+rand+"@example.com", password: "password123" })
    });
    const loginData = await res2.json();
    const token = loginData.token;
    console.log("Token:", token ? "Got token" : "Failed token");

    // 3. create session
    const res3 = await fetch("http://127.0.0.1:3001/chat/sessions", {
      method: "POST", headers: { "Content-Type": "application/json", "Authorization": "Bearer " + token }
    });
    const sessionData = await res3.json();
    const sessionId = sessionData.sessionId;
    console.log("Session:", sessionId);

    // 4. send message
    const res4 = await fetch("http://127.0.0.1:3001/chat/sessions/" + sessionId + "/messages", {
      method: "POST", headers: { "Content-Type": "application/json", "Authorization": "Bearer " + token },
      body: JSON.stringify({ message: "hello" })
    });
    const chatData = await res4.json();
    console.log("Chat response status:", res4.status);
    console.log("Chat response:", chatData);
  } catch (e) {
    console.error(e);
  }
}
run();
