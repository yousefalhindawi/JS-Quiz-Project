document.querySelector('.userlogo').addEventListener('click', function () {
    if (document.querySelector('.user').classList.contains("active")) {
        document.querySelector('.user').classList.remove("active");
    } else{
        document.querySelector('.user').classList.add("active")
    } ;
})

let userName=localStorage.getItem("name");
let lastName=localStorage.getItem("lname");

document.getElementById("wlcname").innerHTML=userName+" "+lastName;

let button3=document.querySelector("#button3")
let button2=document.querySelector("#button2")
let button1=document.querySelector("#button1")
let buttonDiv1=document.querySelector(".button1")
let buttonDiv2=document.querySelector(".button2")
let buttonDiv3=document.querySelector(".button3")
let MyAlert=document.querySelector(".sure")

var path;
 function showMe(){
     MyAlert.classList.add("show")
 }
 button3.addEventListener("click",()=>{
    showMe();
    path=3
    window.localStorage.setItem("myPath",path)
 })
button2.addEventListener("click",()=>{
    showMe();
    path=2
    window.localStorage.setItem("myPath",path)
})
button1.addEventListener("click",()=>{
    showMe();
    path=1
    window.localStorage.setItem("myPath",path)
})


    if (localStorage.getItem('Rpath1') !== null) {
        buttonDiv1.innerHTML= `<p class="finish">${localStorage.getItem('Rpath1')}/5</p>`;
        console.log(`Email address exists`);
    }
    if (localStorage.getItem('Rpath2') !== null) {
        buttonDiv2.innerHTML= `<p class="finish">${localStorage.getItem('Rpath2')}/5</p>`;
        console.log(`Email address exists`);
    }
    if (localStorage.getItem('Rpath3') !== null) {
        buttonDiv3.innerHTML= `<p class="finish">${localStorage.getItem('Rpath3')}/10</p>`;
        console.log(`Email address exists`);
    }
    if (localStorage.getItem('Rpath1') !== null && localStorage.getItem('Rpath2') !== null && localStorage.getItem('Rpath3') !== null){
        if (document.querySelector('.result').classList.contains("show2")) {
            document.querySelector('.result').classList.remove("show2");
        } else{
            document.querySelector('.result').classList.add("show2")
        } ;
    }
// wrong answers array
let MyWrongAnswers=[];
let TempArr=[];
function myArray(){
    MyWrongAnswers=JSON.parse(localStorage.getItem("wrongAnswers"));

    TempArr = JSON.parse(localStorage.getItem("allWrong"));
    
    TempArr.push(MyWrongAnswers);
    if(TempArr[TempArr.length-1][1]==TempArr[TempArr.length-2][1]){
        TempArr.pop()
    }
    localStorage.setItem("allWrong", JSON.stringify(TempArr));
}
myArray();



