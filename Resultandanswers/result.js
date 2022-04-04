let a = JSON.parse(window.localStorage.getItem("allWrong"))
console.log(a)
let email = localStorage.getItem("email");
let pass = localStorage.getItem("pw");
let name1 = localStorage.getItem("name")


for (let i = 1; i < a.length; i++) {
    // console.log(a[i])
    if (a[i] != null) {
        let leng = a[i].length
        for (let j = 0; j < leng; j++) {
            if (a[i][j][6] == '1') {
                if (a[i][j][8] == '1') {
                    if (a[i][j][10] == '1') {
                        document.getElementById('iq-q1-a1').innerHTML+= '(Your Answer)'
                    }
                    else if (a[i][j][10] == '2') {
                        document.getElementById('iq-q1-a2').innerHTML+= '(Your Answer)'
                    }
                    else if (a[i][j][10] == '4') {
                        document.getElementById('iq-q1-a4').innerHTML+= '(Your Answer)'
                    }
                    else{
                        document.getElementById('iq-q1-a3').innerHTML+= '(Your Answer)'
                    }
                }
                else if (a[i][j][8] == '2') {
                    if (a[i][j][10] == '1') {
                        document.getElementById('iq-q2-a1').innerHTML+= '(Your Answer)'
                    }
                    else if (a[i][j][10] == '2') {
                        document.getElementById('iq-q2-a2').innerHTML+= '(Your Answer)'
                    }
                    else if (a[i][j][10] == '3') {
                        document.getElementById('iq-q2-a3').innerHTML+= '(Your Answer)'
                    }
                    else{
                        document.getElementById('iq-q2-a4').innerHTML+= '(Your Answer)'
                    }
                }
                else if (a[i][j][8] == '3') {
                    if (a[i][j][10] == '2') {
                        document.getElementById('iq-q3-a2').innerHTML+= '(Your Answer)'
                    }
                    else if (a[i][j][10] == '3') {
                        document.getElementById('iq-q3-a3').innerHTML+= '(Your Answer)'
                    }
                    else if (a[i][j][10] == '4') {
                        document.getElementById('iq-q3-a4').innerHTML+= '(Your Answer)'
                    }
                    else{
                        document.getElementById('iq-q3-a1').innerHTML+= '(Your Answer)'
                    }
                }
                else if (a[i][j][8] == '4') {
                    if (a[i][j][10] == '2') {
                        document.getElementById('iq-q4-a2').innerHTML+= '(Your Answer)'
                    }
                    else if (a[i][j][10] == '3') {
                        document.getElementById('iq-q4-a3').innerHTML+= '(Your Answer)'
                    }
                    else if (a[i][j][10] == '4') {
                        document.getElementById('iq-q4-a4').innerHTML+= '(Your Answer)'
                    }
                    else{
                        document.getElementById('iq-q4-a1').innerHTML+= '(Your Answer)'
                    }
                }
                else if (a[i][j][8] == '5') {
                    if (a[i][j][10] == '1') {
                        document.getElementById('iq-q5-a1').innerHTML+= '(Your Answer)'
                    }
                    else if (a[i][j][10] == '3') {
                        document.getElementById('iq-q5-a3').innerHTML+= '(Your Answer)'
                    }
                    else if (a[i][j][10] == '4') {
                        document.getElementById('iq-q5-a4').innerHTML+= '(Your Answer)'
                    }
                    else{
                        document.getElementById('iq-q5-a2').innerHTML+= '(Your Answer)'
                    }
                }
            }
            else if (a[i][j][6] == '2') {
                if (a[i][j][8] == '1') {
                    if (a[i][j][10] == '1') {
                        document.getElementById('english-q1-a1').innerHTML+= '(Your Answer)'
                    }
                    else if (a[i][j][10] == '2') {
                        document.getElementById('english-q1-a2').innerHTML+= '(Your Answer)'
                    }
                    else if (a[i][j][10] == '4') {
                        document.getElementById('english-q1-a4').innerHTML+= '(Your Answer)'
                    }
                    else{
                        document.getElementById('english-q1-a3').innerHTML+= '(Your Answer)'
                    }
                }
                else if (a[i][j][8] == '2') {
                    if (a[i][j][10] == '1') {
                        document.getElementById('english-q2-a1').innerHTML+= '(Your Answer)'
                    }
                    else if (a[i][j][10] == '2') {
                        document.getElementById('english-q2-a2').innerHTML+= '(Your Answer)'
                    }
                    else if (a[i][j][10] == '4') {
                        document.getElementById('english-q2-a4').innerHTML+= '(Your Answer)'
                    }
                    else{
                        document.getElementById('english-q2-a3').innerHTML+= '(Your Answer)'
                    }
                }
                else if (a[i][j][8] == '3') {
                    if (a[i][j][10] == '2') {
                        document.getElementById('english-q3-a2').innerHTML+= '(Your Answer)'
                    }
                    else if (a[i][j][10] == '3') {
                        document.getElementById('english-q3-a3').innerHTML+= '(Your Answer)'
                    }
                    else if (a[i][j][10] == '4') {
                        document.getElementById('english-q3-a4').innerHTML+= '(Your Answer)'
                    }
                    else{
                        document.getElementById('english-q3-a1').innerHTML+= '(Your Answer)'
                    }
                }
                else if (a[i][j][8] == '4') {
                    if (a[i][j][10] == '1') {
                        document.getElementById('english-q4-a1').innerHTML+= '(Your Answer)'
                    }
                    else if (a[i][j][10] == '2') {
                        document.getElementById('english-q4-a2').innerHTML+= '(Your Answer)'
                    }
                    else if (a[i][j][10] == '3') {
                        document.getElementById('english-q4-a3').innerHTML+= '(Your Answer)'
                    }
                    else{
                        document.getElementById('english-q4-a4').innerHTML+= '(Your Answer)'
                    }
                }
                else if (a[i][j][8] == '5') {
                    if (a[i][j][10] == '1') {
                        document.getElementById('english-q4-a1').innerHTML+= '(Your Answer)'
                    }
                    else if (a[i][j][10] == '2') {
                        document.getElementById('english-q4-a2').innerHTML+= '(Your Answer)'
                    }
                    else if (a[i][j][10] == '3') {
                        document.getElementById('english-q4-a3').innerHTML+= '(Your Answer)'
                    }
                    else{
                        document.getElementById('english-q4-a4').innerHTML+= '(Your Answer)'
                    }
                }
            }
            else if (a[i][j][6] == '3') {
                if (a[i][j][8] == '1' && a[i][j][9] == '-') {
                    if (a[i][j][10] == '1') {
                        document.getElementById('tech-q1-a1').innerHTML+= '(Your Answer)'
                    }
                    else if (a[i][j][10] == '2') {
                        document.getElementById('tech-q1-a2').innerHTML+= '(Your Answer)'
                    }
                    else if (a[i][j][10] == '3') {
                        document.getElementById('tech-q1-a3').innerHTML+= '(Your Answer)'
                    }
                    else{
                        document.getElementById('tech-q1-a4').innerHTML+= '(Your Answer)'
                    }
                }
                else if (a[i][j][8] == '2') {
                    if (a[i][j][10] == '1') {
                        document.getElementById('tech-q2-a1').innerHTML+= '(Your Answer)'
                    }
                    else if (a[i][j][10] == '3') {
                        document.getElementById('tech-q2-a3').innerHTML+= '(Your Answer)'
                    }
                    else if (a[i][j][10] == '2') {
                        document.getElementById('tech-q2-a4').innerHTML+= '(Your Answer)'
                    }
                    else{
                        document.getElementById('tech-q2-a2').innerHTML+= '(Your Answer)'
                    }
                }
                else if (a[i][j][8] == '3') {
                    if (a[i][j][10] == '1') {
                        document.getElementById('tech-q3-a1').innerHTML+= '(Your Answer)'
                    }
                    else if (a[i][j][10] == '2') {
                        document.getElementById('tech-q3-a2').innerHTML+= '(Your Answer)'
                    }
                    else if (a[i][j][10] == '3') {
                        document.getElementById('tech-q3-a3').innerHTML+= '(Your Answer)'
                    }
                    else{
                        document.getElementById('tech-q3-a4').innerHTML+= '(Your Answer)'
                    }
                }
                else if (a[i][j][8] == '4') {
                    if (a[i][j][10] == '2') {
                        document.getElementById('tech-q4-a2').innerHTML+= '(Your Answer)'
                    }
                    else if (a[i][j][10] == '3') {
                        document.getElementById('tech-q4-a3').innerHTML+= '(Your Answer)'
                    }
                    else if (a[i][j][10] == '4') {
                        document.getElementById('tech-q4-a4').innerHTML+= '(Your Answer)'
                    }
                    else{
                        document.getElementById('tech-q4-a1').innerHTML+= '(Your Answer)'
                    }
                }
                else if (a[i][j][8] == '5') {
                    if (a[i][j][10] == '1') {
                        document.getElementById('tech-q5-a1').innerHTML+= '(Your Answer)'
                    }
                    else if (a[i][j][10] == '2') {
                        document.getElementById('tech-q5-a2').innerHTML+= '(Your Answer)'
                    }
                    else if (a[i][j][10] == '3') {
                        document.getElementById('tech-q5-a3').innerHTML+= '(Your Answer)'
                    }
                    else{
                        document.getElementById('tech-q5-a4').innerHTML+= '(Your Answer)'
                    }
                }
                else if (a[i][j][8] == '6') {
                    if (a[i][j][10] == '1') {
                        document.getElementById('tech-q6-a1').innerHTML+= '(Your Answer)'
                    }
                    else if (a[i][j][10] == '3') {
                        document.getElementById('tech-q6-a3').innerHTML+= '(Your Answer)'
                    }
                    else if (a[i][j][10] == '4') {
                        document.getElementById('tech-q6-a4').innerHTML+= '(Your Answer)'
                    }
                    else{
                        document.getElementById('tech-q6-a2').innerHTML+= '(Your Answer)'
                    }
                }
                else if (a[i][j][8] == '7') {
                    if (a[i][j][10] == '2') {
                        document.getElementById('tech-q7-a2').innerHTML+= '(Your Answer)'
                    }
                    else if (a[i][j][10] == '3') {
                        document.getElementById('tech-q7-a3').innerHTML+= '(Your Answer)'
                    }
                    else if (a[i][j][10] == '4') {
                        document.getElementById('tech-q7-a4').innerHTML+= '(Your Answer)'
                    }
                    else{
                        document.getElementById('tech-q7-a1').innerHTML+= '(Your Answer)'
                    }
                }
                else if (a[i][j][8] == '8') {
                    if (a[i][j][10] == '2') {
                        document.getElementById('tech-q8-a2').innerHTML+= '(Your Answer)'
                    }
                    else if (a[i][j][10] == '3') {
                        document.getElementById('tech-q8-a3').innerHTML+= '(Your Answer)'
                    }
                    else if (a[i][j][10] == '4') {
                        document.getElementById('tech-q8-a4').innerHTML+= '(Your Answer)'
                    }
                    else{
                        document.getElementById('tech-q8-a1').innerHTML+= '(Your Answer)'
                    }
                }
                else if (a[i][j][8] == '9') {
                    if (a[i][j][10] == '1') {
                        document.getElementById('tech-q9-a1').innerHTML+= '(Your Answer)'
                    }
                    else if (a[i][j][10] == '2') {
                        document.getElementById('tech-q9-a2').innerHTML+= '(Your Answer)'
                    }
                    else if (a[i][j][10] == '4') {
                        document.getElementById('tech-q9-a4').innerHTML+= '(Your Answer)'
                    }
                    else{
                        document.getElementById('tech-q9-a3').innerHTML+= '(Your Answer)'
                    }
                }
                else if (a[i][j][8] == '1' && a[i][j][9] == '0') {
                    if (a[i][j][11] == '2') {
                        document.getElementById('tech-q10-a2').innerHTML+= '(Your Answer)'
                    }
                    else if (a[i][j][11] == '3') {
                        document.getElementById('tech-q10-a3').innerHTML+= '(Your Answer)'
                    }
                    else if (a[i][j][11] == '4') {
                        document.getElementById('tech-q10-a4').innerHTML+= '(Your Answer)'
                    }
                    else{
                        document.getElementById('tech-q10-a1').innerHTML+= '(Your Answer)'
                    }
                }
            }
        }
    }
}

// localStorage.clear();