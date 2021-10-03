window.speechRecognition =
  window.speechRecognition || window.webkitSpeechRecognition;

const recognition = new speechRecognition();
recognition.interinResult = true;

let input = document.getElementById("input-text");

recognition.addEventListener("result", (e) => {
  const transcript = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  input.value += transcript;

  if (e.results[0].isFinal) {
    input.value += " ";
    input.style.height = input.scrollHeight + "px";
  }

  if (transcript.includes("Samsi")) {
    alert("dia adalah seorang programmer sukses");
  }
});

recognition.addEventListener("end", recognition.start);
recognition.start();

// membuat scrool effect pada textarea
input.addEventListener("keyup", (e) => {
  input.style.height = "auto";
  let scrlHeight = e.target.scrollHeight;
  input.style.height = `${scrlHeight}px`;
});

//membuat fungsi copy
const copy = document.querySelector("ion-icon");
copy.addEventListener("click", () => {
  input.select();
  document.execCommand("copy");
});
