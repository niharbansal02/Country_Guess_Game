const listArr0 = ["Russia", "India", "Bangladesh", "China", "Australia", "New Zealand", "Bhutan", "South Africa", "Sri Lanka", "USA"];
const listArr1 = ["USA", "China", "Bangladesh", "New Zealand", "South Africa"];
const listArr2 = ["USA", "India", "Australia", "Bangladesh", "Sri Lanka"];
const listArr3 = ["Bangladesh", "India", "Sri Lanka", "New Zealand", "Bhutan", "South Africa"];
const listArr4 = ["China", "Australia", "Sri Lanka", "South Africa", "Bhutan"];

const arrLen0 = listArr0.length;
const arrLen1 = listArr1.length;
const arrLen2 = listArr2.length;
const arrLen3 = listArr3.length;
const arrLen4 = listArr4.length;

const yesNoBlock = document.querySelector("#YesNo");
const yesButton = document.querySelector(".yes");
const noButton = document.querySelector(".no");

let eleRef0 = [];
let eleRef1 = [];
let eleRef2 = [];
let eleRef3 = [];
let eleRef4 = [];

// Arr0
for(let i = 0; i < arrLen0; i++) {
    let temp = ".ele0" + (i + 1);
    eleRef0.push(document.querySelector(temp));
}

for(let i = 0; i < arrLen0; i++) {
    eleRef0[i].innerHTML = listArr0[i];
}

// Arr1
for(let i = 0; i < arrLen1; i++) {
    let temp = ".ele1" + (i + 1);
    eleRef1.push(document.querySelector(temp));
}

for(let i = 0; i < arrLen1; i++) {
    eleRef1[i].innerHTML = listArr1[i];
}

// Arr2
for(let i = 0; i < arrLen2; i++) {
    let temp = ".ele2" + (i + 1);
    eleRef2.push(document.querySelector(temp));
}


for(let i = 0; i < arrLen2; i++) {
    eleRef2[i].innerHTML = listArr2[i];
}

// Arr3
for(let i = 0; i < arrLen3; i++) {
    let temp = ".ele3" + (i + 1);
    eleRef3.push(document.querySelector(temp));
}

for(let i = 0; i < arrLen3; i++) {
    eleRef3[i].innerHTML = listArr3[i];
}

// Arr4
for(let i = 0; i < arrLen4; i++) {
    let temp = ".ele4" + (i + 1);
    eleRef4.push(document.querySelector(temp));
}

for(let i = 0; i < arrLen4; i++) {
    eleRef4[i].innerHTML = listArr4[i];
}

let listCount = 0;
const buttonRef = document.querySelector(".next");
// document.querySelectorAll(".ele1, .ele2").style.color = "red";
buttonRef.onclick = function() {
    document.querySelector(".yes").checked = false;
    document.querySelector(".no").checked = false;
    yesNoBlock.style.display = "block";
    if(listCount === 0) {
        document.querySelector(".list0").style.display = "none";
        document.querySelector(".list1").style.display = "block";
    }
    if(listCount === 1) {
        document.querySelector(".list1").style.display = "none";
        document.querySelector(".list2").style.display = "block";
    }
    if(listCount === 2) {
        document.querySelector(".list2").style.display = "none";
        document.querySelector(".list3").style.display = "block";
    }
    if(listCount === 3) {
        document.querySelector(".list3").style.display = "none";
        document.querySelector(".list4").style.display = "block";
    }
    listCount++;
    if(listCount === 5) {
        document.querySelector(".list4").style.display = "none";
        buttonRef.style.display = "none";
        yesNoBlock.style.display = "none";
        score();
    }
}

let inArr = [];

yesButton.onclick = function() {
    inArr.push(listCount);
}

const gName = document.getElementById("guessed");

// console.log(inArr);
const score = function() {
    gName.style.display = "block";
    if(inArr[0] === 1) {
        if(inArr[1] === 2) {
            gName.innerHTML = "USA";
        } else if (inArr[1] === 4) {
            gName.innerHTML = "China";
        } else if (inArr[1] === 3) {
            gName.innerHTML = "New Zealand";
        } if(inArr[2] === 3 && inArr[2] === 4) {
            gName.innerHTML = "South Africa";
        } if(inArr[1] === 2 && inArr[2] === 3) {
            gName.innerHTML = "Bangladesh";
        }
    } else if(inArr[0] === 2) {
        if(inArr[1] === 3) {
            gName.innerHTML = "India";
        } else if (inArr[1] === 4) {
            gName.innerHTML = "Australia";
        } if (inArr[1] === 3 && inArr[2] === 4) {
            gName.innerHTML = "Sri Lanka";
        }
    } else if(inArr[0] === 3)
        gName.innerHTML = "Bhutan";
    else
        gName.innerHTML = "Russia";
}