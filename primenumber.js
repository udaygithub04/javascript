let n=27
let isprime=true;
for(let i=2;i*i<=n;i++){
    if(n%i==0)
   isprime=false;
}
if(isprime==true){
    console.log("number is prime");
}
else{console.log("number is not prime");}