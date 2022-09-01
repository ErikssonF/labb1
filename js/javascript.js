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

// const data1 = document.querySelector("testname");
// const data2 = document.querySelector("email");
// const data3 = document.querySelector("message");
// const btn1 = document.querySelector("btn");
// const form = document.querySelector("formTest");


//get references for text input and button fields
firstname = document.getElementById("firstname")
lastname = document.getElementById("lastname")
jsonBtn = document.getElementById("jsonbtn")
jsonText = document.getElementById("jsontext")
let output = document.querySelector("output");
const form = document.querySelector("#formTest");


function testFunction(event){

    event.preventDefault();

    if(firstname || lastname)
    form.addEventListener("click", function(){
    
    data = {
        "firstName":firstname.value,
        "lastName":lastname.value
    }
    jsonText.innerText = JSON.stringify(data)
    console.log(jsonText);

    console.log(data);

    download(data);
})
}

if(form)
form.addEventListener('submit', testFunction);

const elRecipeOutput = document.querySelector("#log");

async function fetchText(){

fetch('text.json')
.then(response => response.json()).then(data => {

        if(elRecipeOutput) {

        let albumText = data.artist 
        let releaseYear = data.about;
        elRecipeOutput.textContent = `${albumText} ${releaseYear}`;  

    } else {
      console.error('Something went wrong(fetchText)')
    }
    })};
