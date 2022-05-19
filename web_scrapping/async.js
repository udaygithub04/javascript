const fs=require("fs");
console.log("before");

fs.readFile("file.txt",cb);
fs.readFile("f2.txt",cb2);

function cb(error,data){
    if(error){
        console.log(error);
    }
    else {
    console.log("first file:"+data);
    }   
}
function cb2(error,data){
    if(error){
        console.log(error);
    }
    else{
        console.log("second fle :"+data)
    }
}


console.log("after");