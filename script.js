    const chatToggle = document.getElementById("chatToggle");
    const chatBox = document.getElementById("chatBox");
    const chatMessages = document.getElementById("chatMessages");
    const userInput = document.getElementById("userInput");
    const sendBtn = document.getElementById("sendBtn");

    // Predefined replies
    const replies = {
      "hello": "Hi there! 👋 How can I help you today?",
      "help": "You can ask me about crops, weather tips, fertilizers, or irrigation.",
      "crops": "🌱 Best crops to grow this season: Wheat, Mustard, and Chickpeas.",
      "weather": "☀️ Today looks sunny with mild winds. Perfect for irrigation.",
      "fertilizer": "Use Urea for nitrogen boost and DAP for phosphorus.",
      "irrigation": "💧 Drip irrigation saves water and improves yield."
    };

    // Toggle chatbox
    chatToggle.addEventListener("click", () => {
      chatBox.style.display = chatBox.style.display === "flex" ? "none" : "flex";
      chatBox.style.flexDirection = "column";
    });

    // Send message
    sendBtn.addEventListener("click", sendMessage);
    userInput.addEventListener("keypress", e => {
      if (e.key === "Enter") sendMessage();
    });

    function addMessage(text, type) {
      const div = document.createElement("div");
      div.classList.add("message", type);
      div.textContent = text;
      chatMessages.appendChild(div);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function sendMessage() {
      const msg = userInput.value.trim();
      if (!msg) return;

      addMessage("👤 " + msg, "user");
      userInput.value = "";

      setTimeout(() => {
        const lower = msg.toLowerCase();
        const reply = replies[lower] || "🤖 Sorry, I don’t understand that. Try 'help'.";
        addMessage("🤖 " + reply, "bot");
      }, 500); // mimic typing delay
    }
