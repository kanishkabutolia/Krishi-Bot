// Simple chat UI logic for chatbot page
const messagesEl = document.getElementById('messages');
const inputEl = document.getElementById('textInput');
const sendBtn = document.getElementById('sendBtn');

function appendMessage(text, sender = 'bot') {
    const msg = document.createElement('div');
    msg.className = 'message ' + (sender === 'user' ? 'user' : 'bot');
    const bubble = document.createElement('div');
    bubble.className = 'bubble ' + (sender === 'user' ? 'user' : 'bot');
    bubble.textContent = text;
    msg.appendChild(bubble);
    messagesEl.appendChild(msg);
    messagesEl.scrollTop = messagesEl.scrollHeight;
}

async function sendMessage() {
    const text = inputEl.value.trim();
    if (!text) return;
    appendMessage(text, 'user');
    inputEl.value = '';

    try {
        appendMessage('Typing...', 'bot');
        const res = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: text })
        });
        const data = await res.json();
        // Remove last "Typing..." message
        const last = messagesEl.querySelector('.message.bot:last-child');
        if (last && last.textContent === 'Typing...') last.remove();

        if (data && data.reply) {
            appendMessage(data.reply, 'bot');
        } else {
            appendMessage('Sorry, no response from server.', 'bot');
        }
    } catch (e) {
        const last = messagesEl.querySelector('.message.bot:last-child');
        if (last && last.textContent === 'Typing...') last.remove();
        appendMessage('Network error. Please try again.', 'bot');
    }
}

sendBtn.addEventListener('click', sendMessage);
inputEl.addEventListener('keydown', (e) => { if (e.key === 'Enter') sendMessage(); });

// Initial greeting
appendMessage('Hello! I am KrishiBot. How can I help you today?', 'bot');
