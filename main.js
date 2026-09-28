const loginPage = document.getElementById("loginPage");
const terminalPage = document.getElementById("terminalPage");
const nameInput = document.getElementById("nameInput");
const output = document.getElementById("output");

function addLine(text, className = "") {

  const line = document.createElement("div");

  line.className = "line " + className;

  line.textContent = text;

  output.appendChild(line);

  window.scrollTo(0, document.body.scrollHeight);
}


function startHack() {

  let name = nameInput.value.trim();

  if (name === "") {
    name = "UNKNOWN_USER";
  }

  loginPage.style.display = "none";

  terminalPage.style.display = "block";

  const messages = [

    ["root@system:~# ./remote_access", ""],

    ["Initializing remote connection...", "dim"],

    ["Establishing encrypted channel ........ OK", ""],

    ["Scanning device ................. FOUND", ""],

    ["Identifying user ................ OK", ""],

    ["User identification: " + name, "warning"],

    ["Authenticating target ........... VERIFIED", ""],

    ["Bypassing security layer ........ OK", "warning"],

    ["Accessing remote session ........ OK", ""],

    ["Retrieving user data ............", ""],

    ["Searching files ................. OK", ""],

    ["Searching contacts .............. OK", ""],

    ["Searching system information .... OK", ""],

    ["", ""],

    [name + " DATA SUCCESSFULLY RETRIEVED", "danger"],

    ["", ""],

    ["SESSION STATUS: ACTIVE", "warning"],

    ["REMOTE CONNECTION: ESTABLISHED", ""],

    ["TRANSFER STATUS: COMPLETE", ""],

    ["", ""],

    ["root@system:~#", ""]

  ];

  let i = 0;

  function nextLine() {

    if (i >= messages.length) return;

    const [text, cls] = messages[i];

    addLine(text, cls);

    i++;

    let delay = 350 + Math.random() * 600;

    if (text.includes("Retrieving")) {
      delay = 1200;
    }

    if (text.includes("SUCCESSFULLY")) {
      delay = 1500;
    }

    setTimeout(nextLine, delay);
  }

  setTimeout(nextLine, 700);
}


// Bisa tekan Enter di kolom nama
nameInput.addEventListener("keydown", function(event) {

  if (event.key === "Enter") {
    startHack();
  }

});