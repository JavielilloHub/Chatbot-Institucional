const chatContainer = document.getElementById("chatContainer");
const userInput = document.getElementById("userInput");
const sendButton = document.getElementById("sendButton");

const quickButtons = document.querySelectorAll(".quick-btn");

function addMessage(message, sender) {

    const messageDiv = document.createElement("div");

    messageDiv.classList.add(
        sender === "user"
            ? "user-message"
            : "bot-message"
    );

    messageDiv.textContent = message;

    chatContainer.appendChild(messageDiv);

    scrollToBottom();
}

function scrollToBottom() {

    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function showLoading() {

    const loadingDiv = document.createElement("div");

    loadingDiv.classList.add("loading-message");

    loadingDiv.id = "loadingMessage";

    loadingDiv.textContent = "Consultando información...";

    chatContainer.appendChild(loadingDiv);

    scrollToBottom();
}

function removeLoading() {

    const loadingMessage =
        document.getElementById("loadingMessage");

    if (loadingMessage) {
        loadingMessage.remove();
    }
}

function handleUserMessage(message) {

    if (message.trim() === "") {
        return;
    }

    addMessage(message, "user");

    userInput.value = "";

    showLoading();

    setTimeout(() => {

        removeLoading();

        const response = getMockResponse(message);

        addMessage(response, "bot");

    }, 1000);
}

sendButton.addEventListener("click", () => {

    const message = userInput.value;

    handleUserMessage(message);
});

userInput.addEventListener("keypress", (event) => {

    if (event.key === "Enter") {

        handleUserMessage(userInput.value);
    }
});

quickButtons.forEach(button => {

    button.addEventListener("click", () => {

        const message = button.textContent;

        handleUserMessage(message);
    });
});