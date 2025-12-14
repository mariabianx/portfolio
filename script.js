document.getElementById("themeBtn").onclick = function() {
  document.body.classList.toggle("dark-mode");
};

document.getElementById("editJobBtn").onclick = function() {
  let newTitle = prompt("Enter new job title:");
  if (newTitle) {
    document.getElementById("jobTitle").textContent = newTitle;
  }
};

document.getElementById("toggleSkillsBtn").onclick = function() {
  let skills = document.getElementById("skillsSection");
  if (skills.style.display === "none") {
    skills.style.display = "block";
    this.textContent = "Hide Skills";
  } else {
    skills.style.display = "none";
    this.textContent = "Show Skills";
  }
};

document.getElementById("msgBox").onkeyup = function() {
  let remaining = 200 - this.value.length;
  document.getElementById("counter").textContent = remaining;
};

function validateForm() {
  let name = document.getElementById("nameField").value.trim();
  let email = document.getElementById("emailField").value.trim();
  if (name === "" || email === "") {
    alert("Name and Email cannot be empty!");
    return false;
  }
  return true;
}

document.getElementById("dateDisplay").textContent = new Date().toDateString();

const quotes = [
  "Keep pushing forward!",
  "You are capable of amazing things.",
  "Success is built on persistence.",
  "Believe in yourself and all that you are."
];

document.getElementById("quoteBtn").onclick = function() {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quoteDisplay").textContent = quotes[randomIndex];
};
