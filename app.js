let check = () => {
    let score = 0;
    let m_score = 0;
    let a_score = 0;
    const q1ans1 = document.getElementById('q1a1')
    const q1ans2 = document.getElementById('q1a2')
    const q1ans3 = document.getElementById('q1a3')
    const q1ans4 = document.getElementById('q1a4')
    if (q1ans3.checked == true) {
        score++;
        m_score++;
        // alert("q1 correct")

    }
    // else{
    //     alert("wrong")
    // }

    const q2ans1 = document.getElementById('q2a1')
    const q2ans2 = document.getElementById('q2a2')
    const q2ans3 = document.getElementById('q2a3')
    const q2ans4 = document.getElementById('q2a4')
    if (q2ans3.checked == true) {
        score++;
        m_score++;

    }


    const q3ans1 = document.getElementById('q3a1')
    const q3ans2 = document.getElementById('q3a2')
    const q3ans3 = document.getElementById('q3a3')
    const q3ans4 = document.getElementById('q3a4')
    if (q3ans1.checked == true) {
        score++;
        m_score++;

    }
    const q4ans1 = document.getElementById('q4a1')
    const q4ans2 = document.getElementById('q4a2')
    const q4ans3 = document.getElementById('q4a3')
    const q4ans4 = document.getElementById('q4a4')
    if (q4ans4.checked == true) {
        score++;
        m_score++;

    }


    const q5ans1 = document.getElementById('q5a1')
    const q5ans2 = document.getElementById('q5a2')
    const q5ans3 = document.getElementById('q5a3')
    const q5ans4 = document.getElementById('q5a4')
    if (q5ans2.checked == true) {
        score++;
        m_score++;

    }
    const q6ans1 = document.getElementById('q6a1')
    const q6ans2 = document.getElementById('q6a2')
    const q6ans3 = document.getElementById('q6a3')
    const q6ans4 = document.getElementById('q6a4')
    if (q6ans1.checked == true) {
        score++;
        a_score++;

    }


    const q7ans1 = document.getElementById('q7a1')
    const q7ans2 = document.getElementById('q7a2')
    const q7ans3 = document.getElementById('q7a3')
    const q7ans4 = document.getElementById('q7a4')
    if (q7ans3.checked == true) {
        score++;
        a_score++;

    }
    const q8ans1 = document.getElementById('q8a1')
    const q8ans2 = document.getElementById('q8a2')
    const q8ans3 = document.getElementById('q8a3')
    const q8ans4 = document.getElementById('q8a4')
    if (q8ans2.checked == true) {
        score++;
        a_score++;

    }


    let q9 = document.getElementById('q9');
    if (q9.value == "a^2+2ab+b^2"|| q9.value == "a^2+b^2+2ab" ) {
        score++;
        a_score++;

    }

    let q10 = document.getElementById('q10');
    if (q10.value == "(a+b)(a-b)" ||q10.value == "(a-b)(a+b)" ) {
        score++;
        a_score++;

    }


    alert("Total Score you got are " + score )
    
    document.write("<h1>  RESULT </h1>")
    document.write("YOU GOT " + m_score + " OUT OF 5 IN MATH QUIZ <br>")
    document.write("YOU GOT " + a_score + " OUT OF 5 IN ALGERBA QUIZ <br>")
    document.write("YOU GOT " + score + " OUT OF 10 IN TOTAL <br>")
    document.write("<h2>You can't Reattemp</h2>")
    
}

