// Utility: set cookie
function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/`;
}

// Utility: get cookie by name
function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    const [key, val] = cookie.split("=");
    if (key === name) return val;
  }
  return "";
}

// Utility: delete cookie
function deleteCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

/* ----------- FORM FUNCTIONS ----------- */

// Show the form and remove Welcome message if exists
function showForm() {
  const welcome = document.getElementById("welcomeMessage");
  if (welcome) {
    welcome.remove();
  }
  document.getElementById("loginForm").style.display = "block";
}

// Hide the form
function hideForm() {
  document.getElementById("loginForm").style.display = "none";
}

// Delete cookies and show the form
function deleteCookiesAndShowForm() {
  deleteCookie("firstname");
  deleteCookie("email");
  showForm();
}

// Show Welcome or Form depending on login
function showWelcomeMessageOrForm() {
  const firstname = getCookie("firstname");
  const email = getCookie("email");

  if (!firstname || !email) {
    showForm();
  } else {
    hideForm();

    const welcome = document.createElement("h1");
    welcome.id = "welcomeMessage";
    welcome.innerHTML = `Welcome ${firstname} `;

    const logoutLink = document.createElement("a");
    logoutLink.href = "#";
    logoutLink.textContent = "(logout)";
    logoutLink.style.fontWeight = "normal";
    logoutLink.style.fontStyle = "italic";
    logoutLink.style.marginLeft = "10px";

    logoutLink.addEventListener("click", function (e) {
      e.preventDefault();
      deleteCookiesAndShowForm();
      welcome.remove();
    });

    welcome.appendChild(logoutLink);
    document.body.appendChild(welcome);
  }
}

/* ----------- EVENT LISTENERS ----------- */

// Handle login submit
document.getElementById("submitForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const firstname = document.getElementById("firstname").value;
  const email = document.getElementById("email").value;

  if (firstname && email) {
    setCookie("firstname", firstname, 7);
    setCookie("email", email, 7);
    showWelcomeMessageOrForm();
  }
});

// Show cookies button
document.getElementById("showCookies").addEventListener("click", function () {
  alert(document.cookie);
});

// On load, show form or welcome message
window.onload = function () {
  showWelcomeMessageOrForm();
};
