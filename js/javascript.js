function menuCollapse() {
    var x = document.querySelector("#navbar");

    console.log(x.style.display);

    if (!x.style.display || x.style.display === "") {
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


userName = document.querySelector("#userNameInput")
password = document.querySelector("#password")
jsonBtn = document.querySelector("#jsonbtn")
jsonText = document.querySelector("#jsontext")
let output = document.querySelector("#output");
const form = document.querySelector("#formTest");


form.addEventListener("submit", testFunction);

function testFunction(event){

    event.preventDefault();

    if(firstname || lastname){
    
    data = {
        "firstName":firstname.value,
        "lastName":lastname.value
    }

    console.log(data);
    console.log(JSON.stringify(data.firstName));

    localStorage.setItem("firstname", data.firstName);

    const demo = document.querySelector("#demo");

    // Retrieve
    demo.textContent = localStorage.getItem("firstname");
}
}




if(form)
form.addEventListener('submit', testFunction);

const albumOutput = document.querySelector("#log");

function fetchText(){

fetch('text.json')
.then(response => response.json()).then(data => {

        if(albumOutput) {

        let albumText = data.artist 
        let releaseYear = data.about;
        
        albumOutput.textContent = `${albumText} ${releaseYear}`;  

    } else {
      console.error('Something went wrong(fetchText)')
    }
    })
};
