document.getElementById("submitForm").addEventListener("submit", setCookies);

function setCookies(event) {
    const firstNameValue = document.getElementById("firstname").value;
    const emailValue = document.getElementById("email").value;
    const d = new Date();
    d.setTime(d.getTime() + (10 * 24 * 60 * 60 * 1000));
    document.cookie = `firstname=${firstNameValue}, email=${emailValue}; expires=${d.toUTCString}`;
}

document.getElementById("showCookies").addEventListener("click", showCookies)

function showCookies() {
    let para = document.createElement("p");
    para.innerHTML = "Cookie: " + document.cookie;
    document.body.appendChild(para);
}