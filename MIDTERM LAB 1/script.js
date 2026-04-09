function sum(){
    let n=document.getElementById("user").value;
    let sum=0;
    for(let i=1;i<=n;i++){
    sum+=i;
    }
    document.getElementById("output").textContent="Total sum "+ sum;
}