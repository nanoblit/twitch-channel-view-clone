const chatInput = document.querySelector("textarea");
const chat = document.querySelector("#chat-view");
const chatButton = document.querySelector(
    "#chat-bottom-buttons-right-row button"
);

const addMessage = () => {
    const p = document.createElement("p");
    p.innerHTML = `<span class="chat-username">User</span>: ${chatInput.value}`;
    chat.appendChild(p);
    chat.scrollTop = chat.scrollHeight;

    chatInput.value = "";
};

chatInput.addEventListener("keydown", e => {
    if (e.keyCode === 13) {
        e.preventDefault();
        addMessage();
    }
});

chatButton.addEventListener("click", e => addMessage());
