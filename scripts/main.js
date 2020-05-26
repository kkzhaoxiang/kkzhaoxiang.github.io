

let myHeading = document.querySelector('h1');
myHeading.textContent = "Hello World";

if (!localStorage.getItem("name")) {
    setUserName()
} else {
    let storedName = localStorage.getItem("name")
    myHeading.text = storedName
}

document.querySelector("html").onclick = function () {
    // alert("别戳我, 我怕疼");
}

let myImg = document.querySelector('img');
myImg.onclick = function() {
    let mySrc = myImg.getAttribute('src')
    if (mySrc === './images/firefox-logo1.jpg') {
        myImg.setAttribute('src', './images/firefox-logo2.jpg')
    } else {
        myImg.setAttribute('src', './images/firefox-logo1.jpg')
    }
}

let myButton = document.querySelector('button')

myButton.onclick = function() {
    setUserName()
}

function setUserName() {
    let myName = prompt("请输入你的名字")
    if (!(myName || myName != null)) {
        setUserName()
    } else {
        if (myName.length != 0) {
            myName = " , " + myName;
        }
        localStorage.setItem("name", myName)
        myHeading.innerHTML = "Mozilla酷毙了" + myName;
    }
}