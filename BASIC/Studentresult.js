function calculateResult(){
    let n = document.getElementById("subject").value;
    let total=0;
    for(let i=1;i<=n;i++){
        let marks=parseFloat(prompt("Enter your marks for subject" + i));
        total+=marks;
    }
    let average=total/2;
    let grade;
    let result;
    if(average>70){
        grade="A";
    }
    else if(average>80){
        grade="A+";
    }
    else{
        grade="B";
    }
    if(total>90){
        result="Pass";
    }
    else{
        result="Fail";
    }
    document.getElementById("ouputt").innerHTML="Total Marks: " + total + "<br>" + "Average Marks: " + average + "<br>" + "Grade: " + grade + "<br>" + "Result: " + result;
}