//empty array
let arr=[];
console.log(arr);

//array with elements
let eleArr=[1,2,4,5,"hello i am string",false,'c',4.5];
console.log(eleArr);
console.log("element at 4th index: "+eleArr[3]);
console.log("element at 0th index: "+eleArr[0]);

//changing element in array
eleArr[3]="nothing";
console.log(eleArr);

//array method
//1.push

console.log("array before push:",eleArr);
eleArr.push("new element");
console.log("array after push: ",eleArr);

//2.pop
console.log("array before pop: ",eleArr);
eleArr.pop();
console.log("array after pop: ",eleArr);

//3.shift
console.log("array before shift: ",eleArr);
eleArr.shift();
console.log("array after shift: ",eleArr);

//4.unshift
console.log("array before unshift: ",eleArr);
eleArr.unshift("newly added item");
console.log("array after unshift: ",eleArr);

let len=eleArr.length;
console.log(len);