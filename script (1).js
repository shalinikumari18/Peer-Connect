// ===== DATA (arrays and objects) =====
const user = { name: "Student", xp: 340, streak: 5, learnHours: 12, teachHours: 4 };
const notifications = [
  { text: "Aman accepted your request", read: false },
  { text: "Reminder: Maths session at 5 PM", read: false },
  { text: "You earned the Helper badge", read: true }
];

// ===== SMALL HELPER: show text inside an element if it exists =====
function showText(id, text) {
  const el = document.getElementById(id);
  if (el) { el.textContent = text; }
}

// ===== DASHBOARD PAGE: fill in numbers and the XP bar =====
function showDashboard() {
  let unread = 0;
  for (const n of notifications) { if (!n.read) { unread++; } }

  // Level: every 100 XP = 1 level
  const level = Number(user.xp / 100).toFixed(0);
  const percent = user.xp % 100;   // XP inside the current level

  showText("welcome", `Welcome back, ${user.name}!`);
  showText("xp", `${user.xp} XP`);
  showText("level", `Level ${level}`);
  showText("streak", `${user.streak} day streak`);
  showText("learn", `${user.learnHours} hrs learning`);
  showText("teach", `${user.teachHours} hrs teaching`);
  showText("unread", `You have ${unread} unread notifications`);

  const fill = document.getElementById("xpFill");
  if (fill) { fill.style.width = percent + "%"; }
}

// ===== TUTORS PAGE: search + subject filter =====
function filterTutors() {
  const text = document.getElementById("search").value.toLowerCase().trim();
  const subject = document.getElementById("subjectFilter").value.toLowerCase();
  const cards = document.getElementsByClassName("tutor-card");
  let shown = 0;

  for (const card of cards) {
    const info = card.textContent.toLowerCase();
    // Show the card only if it matches both the search text and the subject
    if (info.includes(text) && info.includes(subject)) {
      card.style.display = "block";
      shown++;
    } else {
      card.style.display = "none";
    }
  }
  showText("resultCount", `${shown} tutors found`);
}

// ===== BOOKING FORM: check fields =====
function submitBooking() {
  const msg = document.getElementById("bookMsg");
  try {
    const name = document.getElementById("bName").value.trim();
    const date = document.getElementById("bDate").value;
    const text = document.getElementById("bText").value.trim();
    if (name === "") { throw "Please enter your name."; }
    if (date === "") { throw "Please choose a date."; }
    if (text === "") { throw "Please describe what you need help with."; }
    msg.style.color = "green";
    msg.textContent = `Thank you, ${name}! Your request is sent. You will be notified when the tutor replies.`;
  } catch (error) {
    msg.style.color = "#b00020";
    msg.textContent = error;
  }
}

// ===== LOGIN FORM =====
function doLogin() {
  const msg = document.getElementById("loginMsg");
  try {
    const email = document.getElementById("lEmail").value.trim();
    const pass = document.getElementById("lPass").value.trim();
    if (!email.includes("@")) { throw "Enter a valid email."; }
    if (pass.length < 6) { throw "Password must be at least 6 characters."; }
    msg.style.color = "green";
    msg.textContent = "Login successful! Go to your Dashboard.";
  } catch (error) {
    msg.style.color = "#b00020";
    msg.textContent = error;
  }
}

// ===== JOIN (REGISTER) FORM =====
function doJoin() {
  const msg = document.getElementById("joinMsg");
  try {
    const name = document.getElementById("jName").value.trim();
    const email = document.getElementById("jEmail").value.trim();
    const pass = document.getElementById("jPass").value.trim();
    if (name === "") { throw "Please enter your name."; }
    if (!email.includes("@")) { throw "Use your college email (must contain @)."; }
    if (pass.length < 6) { throw "Password must be at least 6 characters."; }
    msg.style.color = "green";
    msg.textContent = `Welcome to Peer-Connect, ${name}! Account created.`;
  } catch (error) {
    msg.style.color = "#b00020";
    msg.textContent = error;
  }
}

console.log("Peer-Connect script loaded");
