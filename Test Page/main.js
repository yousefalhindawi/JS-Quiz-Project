//selectors
var path=Number(window.localStorage.getItem("myPath"));
let Rpath1;
let Rpath2;
let Rpath3;
let path1=document.querySelector(".path1");
let path2=document.querySelector(".path2");
let path3=document.querySelector(".path3");
let questions1=document.querySelectorAll(".path1 .question-container");
let questions2=document.querySelectorAll(".path2 .question-container");
let questions3=document.querySelectorAll(".path3 .question-container");
let nexButton=document.querySelector(".after");
let beforeButton=document.querySelector(".before");
let dots=document.querySelector(".dots")
let submit=document.querySelector(".onSubmit");
let points=0;
let active=0;
let rightAnswers=document.querySelectorAll(".rightOne")
var myAnswer;
let sure=document.querySelector(".sure")
let no=document.querySelector(".no")
let myRAnswers=[];
let timer=document.querySelector(".timer span");
let startingMinutes;
//functions
async function get(){
    let response = await fetch("./Data.json");
    let data = await response.json();
    if(path==1){
        for(i=0;i<questions1.length;i++){
        questions1[i].children[0].innerHTML=`${data.path1.questions[i]}`
        for(j=0;j<4;j++){
        questions1[i].children[1].children[j].innerHTML=data.path1Answers[i][j];
    }
    }
    }else if(path==2){
        for(i=0;i<questions2.length;i++){
        questions2[i].children[0].innerHTML=`${data.path2.questions[i]}`
        for(j=0;j<4;j++){
        questions2[i].children[1].children[j].innerHTML=data.path2Answers[i][j];
    }
}
    }else if(path==3){
        for(i=0;i<questions3.length;i++){
        questions3[i].children[0].innerHTML=`${data.path3.questions[i]}`
        for(j=0;j<4;j++){
        questions3[i].children[1].children[j].innerHTML=data.path3Answers[i][j];
    }
    }
}
}
get()
function onStart(){
    if(path==1){
        startingMinutes=questions1.length/4*3;
        document.querySelector(".path1").classList.add("show");
        document.querySelector(".path2").classList.add("hide");
        document.querySelector(".path3").classList.add("hide");
points=0;
Rpath1=points;
window.localStorage.setItem("Rpath1",Rpath1);
for(i=0;i<questions1.length;i++){
questions1[i].classList.add("hide")
let myLi=document.createElement("li");
myLi.classList.add("dot")
myLi.classList.add(`dot${i+1}`)
dots.appendChild(myLi);
}
questions1[active].classList.remove("hide")
questions1[active].classList.add("show")
myAnswer = [].slice.call(questions1[active].children[1].children);
}else if(path==2){
    startingMinutes=questions2.length/4*3;
    document.querySelector(".path1").classList.add("hide");
    document.querySelector(".path2").classList.add("show");
    document.querySelector(".path3").classList.add("hide");
    points=0;
    Rpath2=points;
    window.localStorage.setItem("Rpath2",Rpath2);
for(i=0;i<questions2.length;i++){
questions2[i].classList.add("hide")
let myLi=document.createElement("li");
myLi.classList.add("dot")
myLi.classList.add(`dot${i+1}`)
dots.appendChild(myLi);
}
questions2[0].classList.remove("hide")
questions2[0].classList.add("show")
myAnswer = [].slice.call(questions2[active].children[1].children);
}else if(path==3){
    startingMinutes=questions3.length/4*3;
        document.querySelector(".path1").classList.add("hide");
        document.querySelector(".path2").classList.add("hide");
        document.querySelector(".path3").classList.add("show");
        points=0;
        Rpath3=points;
        window.localStorage.setItem("Rpath3",Rpath3);
        for(i=0;i<questions3.length;i++){
        questions3[i].classList.add("hide")
        let myLi=document.createElement("li");
        myLi.classList.add("dot")
        myLi.classList.add(`dot${i+1}`)
        dots.appendChild(myLi);
        }
        questions3[0].classList.remove("hide")
        questions3[0].classList.add("show")
        myAnswer = [].slice.call(questions3[active].children[1].children);
    }
    dots.children[active].classList.add("active-dot");
}
function addActive(){
if(path==1 || path==2){
if(active==4){
    dots.children[4].classList.add("active-dot")
}else{active++}}
if(path==3){
    if(active==9){
        dots.children[9].classList.add("active-dot")
        
    }else{active++}
}
}
function decreaseActive(){
    if(path==1 || path==2){
    if(active==0){
        active=4
    }else{active--}}
    if(path==3){
        if(active==0){
            active=9
        }else{active--}
    }
    }
function activePage(){
       if(path==1){
           for(i=0;i<questions1.length;i++){
           questions1[i].classList.remove("show")
           questions1[i].classList.add("hide")
           dots.children[i].classList.remove("active-dot")
        }
        questions1[active].classList.add("show")
        questions1[active].classList.remove("hide")
        myAnswer = [].slice.call(questions1[active].children[1].children);
        myRefresh()
        dots.children[active].classList.add("active-dot");
   }else if(path==2){
    for(i=0;i<questions2.length;i++){
        questions2[i].classList.remove("show")
        questions2[i].classList.add("hide")
        dots.children[i].classList.remove("active-dot")
     }
     questions2[active].classList.add("show")
     questions2[active].classList.remove("hide")
     myAnswer = [].slice.call(questions2[active].children[1].children);
     myRefresh()
     dots.children[active].classList.add("active-dot");
   }else if(path==3){
    for(i=0;i<questions3.length;i++){
        questions3[i].classList.remove("show")
        questions3[i].classList.add("hide")
        dots.children[i].classList.remove("active-dot")
     }
     questions3[active].classList.add("show")
     questions3[active].classList.remove("hide")
     myAnswer = [].slice.call(questions3[active].children[1].children);
     myRefresh()
     dots.children[active].classList.add("active-dot");
    }
 }
function selectedLi(){
    active=myLis.indexOf(this)
    activePage()
}
function checkResult(){
    points=0;
    myRAnswers=[]
    if(path==1){
        
        for(i=0;i<questions1.length;i++){
            if(questions1[i].classList.contains("point")){
                points++;
                Rpath1=points;
            }
            for(j=0;j<4;j++){
                if(questions1[i].children[1].children[j].classList.contains("ops")){
                    myRAnswers.push(questions1[i].children[1].children[j].classList[1]);
                }
                
            }
        }
        window.localStorage.setItem("Rpath1",Rpath1);
        
    }else if(path==2){
        for(i=0;i<questions2.length;i++){
            if(questions2[i].classList.contains("point")){
                points++;
                Rpath2=points;
                
            }
            for(j=0;j<4;j++){
                if(questions2[i].children[1].children[j].classList.contains("ops")){
                    myRAnswers.push(questions2[i].children[1].children[j].classList[1]);
                }
                
            }
        }
        window.localStorage.setItem("Rpath2",Rpath2);
    }else if(path==3){
        for(i=0;i<questions3.length;i++){
            if(questions3[i].classList.contains("point")){
                points++;
                Rpath3=points;
            }
            for(j=0;j<4;j++){
                if(questions3[i].children[1].children[j].classList.contains("ops")){
                    myRAnswers.push(questions3[i].children[1].children[j].classList[1]);
                }
                
            }
        }
        window.localStorage.setItem("Rpath3",Rpath3);
    }
    window.localStorage.setItem("points",points);
    window.localStorage.setItem("wrongAnswers",JSON.stringify(myRAnswers));
    
    
    
}
//add events
onStart()
function myRefresh(){
myAnswer.forEach(e => e.addEventListener("click",function(){
    nexButton.classList.add("tick")
    for(i=0;i<myAnswer.length;i++){
        myAnswer[i].classList.remove("colorIt");
        myAnswer[i].classList.remove("selected");
    }
    
    this.classList.add("colorIt")
    this.classList.add("selected")
    
    dots.children[active].classList.add("answered-dot")
    if(this.classList.contains("rightOne")){
        this.parentElement.parentElement.classList.add("point");
        for(i=0;i<4;i++){
            this.parentElement.children[i].classList.remove("ops")
        }
    }else{
        for(i=0;i<4;i++){
            this.parentElement.children[i].classList.remove("ops")
        }
        this.classList.add("ops")
        this.parentElement.parentElement.classList.remove("point");
    }
}));
}
myRefresh()
nexButton.addEventListener("click",()=>{
    if(active>=8 && path==3){
        nexButton.classList.add("last-answer")
    }
    if(active>=3 && path==1){
        nexButton.classList.add("last-answer")
    }
    if(active>=3 && path==2){
        nexButton.classList.add("last-answer")
    }
    addActive()
    activePage()
    nexButton.classList.remove("tick")
    

})
beforeButton.addEventListener("click",()=>{
    decreaseActive()
    activePage()
    })
    let myLis = [].slice.call(dots.children);
    // myLis.forEach(ele=>ele.addEventListener("click",selectedLi));
submit.addEventListener("click",()=>{
sure.classList.add("popme");
checkResult()
})
no.addEventListener("click",()=>{
    sure.classList.remove("popme");
});
//timer
let time=startingMinutes*60;

function updateCounter(){
    var minutes=Math.floor(time/60);
    let seconds=time%60;
    if(minutes<=9 && seconds<=9){
        timer.innerHTML=`0${minutes}:0${seconds}`;
    }else if(minutes<=9 && seconds>=10){
        timer.innerHTML=`0${minutes}:${seconds}`;
    }else if(seconds<=9 && minutes>=10){
        timer.innerHTML=`${minutes}:0${seconds}`;
    }
    if(time<=20){
        timer.style.color = "#ff4848";
    }
    if(time==0){
        checkResult()
        location.href="../WelcomePage/Welcome-Page.html";
    }
    time--;
}
setInterval(updateCounter,1000);