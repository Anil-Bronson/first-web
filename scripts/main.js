const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/cat.png") {
    myImage.setAttribute("src", "images/cat2.jpg");
  } else {
    myImage.setAttribute("src", "images/cat.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Bert thinks you're cool, ${myName}`;
    }
  }
  

if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Bert thinks you're cool, ${storedName}`;
  }

  myButton.onclick = () => {
    setUserName();
  };
  
  
/*document.querySelector("html").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
  });
  
  document.querySelector("html").addEventListener("click", () => {
    alert("Ouch! Stop poking me!");
  });

  There's an alternative way of writing anonymous functions, which we call an arrow function. An arrow function uses () => instead of function ():

*/  
