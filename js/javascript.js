function menuCollapse() {
    var x = document.querySelector("#navbar");

    console.log(x.style.display);

    if (!x.style.display || x.style.display === "" || x.style.display == "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

 function resizeFunction() {
    var x = document.querySelector("#navbar");
    var newWidth = window.innerWidth;
    
    if (newWidth > 600 & x.style.display === "none")
        x.style.display = "block";

    if(newWidth < 600 & x.style.display === "block")
        x.style.display = "none";
 }

window.addEventListener("resize", resizeFunction);

userName = document.querySelector("#userNameInput");
password = document.querySelector("#password");
jsonBtn = document.querySelector("#jsonbtn");
jsonText = document.querySelector("#jsontext");
let output = document.querySelector("#output");
const form = document.querySelector("#formTest");
const welcomeMessageOutput = document.querySelector("#welcomeMessage");



if(form)
form.addEventListener("submit", saveUserInput);

function saveUserInput(event){

    event.preventDefault();

    if(userName && password){
    data = {
        "userName":userName.value,
        "lastName":password.value
    }

    localStorage.setItem("username", data.userName);

    welcomeMessageOutput.textContent = localStorage.getItem("username");

    let userNameTest = welcomeMessageOutput.textContent;

    welcomeMessageOutput.textContent = `Välkommen ${userNameTest}!`;  

    }else{
        console.error("skärp DAJJ")
        alert("Fyll i användarnamn & lösenord");
    };
}



if(form)
form.addEventListener('submit', saveUserInput);

const albumOutput = document.querySelector("#albumOutput");

function fetchText(){

    fetch('text.json')
        .then(response =>
             response.json())
             .then(data => {

        if(albumOutput) {

        let albumText = data.artist 
        let releaseYear = data.about;
        
        albumOutput.textContent = `${albumText} ${releaseYear}`;  

    } else {
      console.error('Something went wrong(fetchText)')
    }
    })
};

function validateForm() {
    
}
