import { shape,rectangle , square , circle } from "./classes.js";
var g=new rectangle(8,4);
var s = new square(5,10)
var c1= new circle(2);
var c2= new circle(5);
g.toString();
s.toString();
c1.toString();
c2.toString();
console.log(shape.objectNumber("rectangle"));
console.log(shape.objectNumber("square"));
console.log(shape.objectNumber("circle"));