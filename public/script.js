const btnSend = document.getElementById("enviar");
const msg = document.getElementById("texto");
const boxChat = document.getElementById("mensagens");

const socket = io();

btnSend.addEventListener("click", () => {
  if (msg.value !== "") {
    socket.emit("New message", msg.value);
    msg.value = "";
  }
});

socket.addEventListener("New message", (msg) => {
  const txtMessage = document.createElement('li');
  txtMessage.textContent = msg;
  txtMessage.classList.add("mensagem");

  boxChat.appendChild(txtMessage);
})