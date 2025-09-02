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
  Cookies.remove("firstname");
  Cookies.remove("email");
  showForm();
}

// Show Welcome or Form depending on login
function showWelcomeMessageOrForm() {
  const firstname = Cookies.get("firstname");
  const email = Cookies.get("email");

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

// New function: set cookies + show welcome
function setCookiesAndShowWelcomeMessage(firstname, email) {
  Cookies.set("firstname", firstname, { expires: 7 });
  Cookies.set("email", email, { expires: 7 });
  showWelcomeMessageOrForm();
}

/* ----------- EVENT LISTENERS ----------- */

// Handle login submit
document.getElementById("submitForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const firstname = document.getElementById("firstname").value;
  const email = document.getElementById("email").value;

  if (firstname && email) {
    setCookiesAndShowWelcomeMessage(firstname, email);
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
