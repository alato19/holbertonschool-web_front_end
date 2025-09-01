document.getElementById("submitForm").addEventListener("submit", setCookies);

function setCookies(event) {
    event.preventDefault();
    const firstname = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const date = new Date();
    date.setDate(date.getDate() + 10);
    const expire = date.toUTCString();

    document.cookie = `firstname=${firstname}; email=${email}; expires= ${expire};`;
}

document.getElementById("showCookies").addEventListener("click", showCookies)

function showCookies() {
    let para = document.createElement("p");
    para.innerHTML = "Cookie: " + document.cookie;
    document.body.appendChild(para);
}


