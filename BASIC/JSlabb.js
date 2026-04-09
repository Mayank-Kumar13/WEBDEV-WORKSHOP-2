// document.getElementById("changeHeading").addEventListener("click", function() {
//     let input = document.getElementById("Input").value;
//     if(input !==""){
//         document.querySelector("h2").textContent = input;
//     }
    
// });
// document.getElementById("changeBackground").addEventListener("click", function() {
//     document.body.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
// });
let student={
    name:"Mayank",
    age:19,
    section:"CSE-21"
};
let jsonData=JSON.stringify(student);


let object=JSON.parse(jsonData);

// for( let i in object){
//     console.log(i +" : "+object[i]);
// }

const add = (a,b)=> (a+b);
console.log(add);