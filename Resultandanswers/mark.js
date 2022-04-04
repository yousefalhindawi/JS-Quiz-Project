
let mark1= Number(window.localStorage.getItem("Rpath1"))
let mark2= Number(window.localStorage.getItem("Rpath2"))
let mark3= Number(window.localStorage.getItem("Rpath3"))
let result=mark1 + mark2 + mark3
// console.log(mark)
// mark=10
if (result>=10){
    document.getElementById('msg1').style.display="block"
    document.getElementById('mark2').innerHTML+=result + ' / 20'
    document.getElementById('mark2').style.color='green'
    document.getElementById('markimg').src='images/pass.png'
}
else{
    document.getElementById('msg2').style.display="block"
    document.getElementById('mark2').innerHTML+=result + ' / 20'
    document.getElementById('mark2').style.color='red'
    document.getElementById('markimg').src='images/fail.png'
}