let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "imgs/firefox-icon.png") {  myImage.setAttribute("src","imgs/cover_basehtml.png");
  } else {
    myImage.setAttribute("src", "imgs/firefox-icon.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

myButton.onclick = function setUserName() {
  let myName = prompt("请输入你的名字。");
  if(!myName){
  setUserName();
  }
  else{
  localStorage.setItem("name", myName);
  myHeading.textContent = "Mozilla " + myName;
  }
}