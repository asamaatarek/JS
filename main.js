// Swap with Destruct
let x =10;
let y=20;
[y,x] = [x,y];
console.log(x,y);
//Max and Min
let arr =[100,200,300,500];
function test(...x){//rest
    return [Math.max(...x),Math.min(...x)];

}
let [max,min]=test(...arr);//speard
console.log(`min value is ${min}`);
console.log(`max value is ${max}`);
//arrayAPIs
var fruits=["apple","strawberry","banana","orange","mango"];
////every
let res =fruits.every(el=>typeof(el)==="string");
console.log(res)
////some
let result=fruits.some(el=>el.startsWith("a"));
console.log(result);
////filter
let check=fruits.filter(el=>el.startsWith('b')||el.startsWith('s'));
console.log(check);
////map
let newArray=fruits.map(el=>`I like ${el}`);
////forEach
newArray.forEach(el=>console.log(el));
