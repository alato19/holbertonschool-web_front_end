document.getElementById("submitForm").addEventListener("submit",setCookies);

function setCookies(event){
    event.preventDefault();
    const firstname = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    document.cookie = `firstname=${firstname}`;
    document.cookie = `email=${email}`;
}

document.getElementById("showCookies").addEventListener("click",showCookies)

function showCookies(){
    let pTagHtml = document.createElement("p");
    const myData = document.cookie.split(" ");
    const cookiesObject = {};
    myData.map((data,index)=>{ 
        const [key, value] = data.split("=");
        cookiesObject[key]=value;
    });

    console.log(getCookie(cookiesObject));
    pTagHtml.innerHTML = "Firstname: " + getCookie(cookiesObject)[1] + " email: " + getCookie(cookiesObject)[0];
    document.body.appendChild(pTagHtml);
}

function getCookie(data){
    return Object.values(data).map((el,i)=>{
       return el.length < 1 ? "empty" : el
    })
}
