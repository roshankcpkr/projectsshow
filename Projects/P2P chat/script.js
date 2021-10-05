// Get required elements
const form = document.querySelector("#peerIDForm");
const peerIDDisplay = document.querySelector("#myPeerID");
const chatForm = document.querySelector("#chatForm");
const messages = document.querySelector("#messages");
const connectionUI = document.querySelector(".connectionUI");
const chatUI = document.querySelector(".chatUI");

chatUI.style.display = "none";

// Globals
const me = new Peer();
var myNick = "";
var peerNick = "";
var pcon = null;

// Event handlers
function enableChat() {
  // Hide existing form
  connectionUI.style.display = "none";

  // Show chatting UI
  chatUI.style.display = "block";

  // Setup event handlers for recieving and sending messages
  pcon.on("data", recieveMessage);

  chatForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(chatForm);
    const message = formData.get("message");
    chatForm.reset();
    sendMessage(message);
  });
}

function recieveMessage(data) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(data));
  messages.appendChild(li);
}

function sendMessage(data) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(data));
  messages.appendChild(li);
  pcon.send(data);
}

// Display connection ID for me
me.on("open", function (id) {
  peerIDDisplay.innerHTML = id;
});

// Connection established by remote
me.on("connection", function (conn) {
  console.log(`Connected to ${conn.peer}!`);
  pcon = conn;
  enableChat();
});

// Establish connection to remote
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(form);

  const peerID = formData.get("pid");

  const conn = me.connect(peerID);
  conn.on("open", function () {
    console.log(`Connected to ${peerID}.`);
    pcon = conn;
    enableChat();
  });
});
