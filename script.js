function submit(){
    var english = Number(document.getElementById("englishgrade").value);
    var math = Number(document.getElementById("mathgrade").value);
    var el1 = Number(document.getElementById("elective_1grade").value);
    var el2 = Number(document.getElementById("elective_2grade").value);
    var el3 = Number(document.getElementById("elective_3grade").value);
    var el4 = Number(document.getElementById("elective_4grade").value);

    var lowest = Math.min(english, math, el1, el2, el3, el4);
    var average = ((english + math + el1 + el2 + el3 + el4) - lowest)/5;
    var award = null;
    document.getElementById("returnaverage").innerText= ("Average GPA of these top 5 subjects is ")+average+"%";
    if (average >= 90){
        award = "Honours 🥳";
    } else if (average >= 85){
        award = "Distinction, and you're " + parseFloat(Number(90 - average).toFixed(2)) + "% off from Honours";
    } else if (average >= 80) {
        award = "Academic award, and you're " + parseFloat(Number(90 - average).toFixed(2)) + "% off from Honours or " + parseFloat(Number(85 - average).toFixed(2)) + "% off from Distinction";
    } else{
        award = "nothing, but you're " + parseFloat(Number(90 - average).toFixed(2)) + "% off from Honours or " + parseFloat(Number(85 - average).toFixed(2)) + "% off from Distinction";
    }
    document.getElementById("returnaward").innerText= ("The award that these grades will get is ") + award;
}