class shape{
    constructor(s){
        this.side = s;
        shape.#count++;
    }
    static #count =0;
    area(){
        throw ("no arguments to be calculated")
        }
    perimeter(){
        throw("no arguments to be calculated")
    }
    toString(){
        console.log(`Area is ${this.area()} and Perimeter is ${this.perimeter()}`);
    }
    static objectNumber(){
       return shape.#count;
    }
}
class rectangle extends shape{
    constructor(side,l){
        if(!side && !l){
            throw("constructor should have arguments")
        }
        else if(typeof side !== "number" ||typeof l !== "number"){
            throw("datatype should be Number")
        }
        super(side);
        this.width=side;
        this.length=l;
        rectangle.#rectCount++;
        if(this.constructor.name === "rectangle" && rectangle.#rectCount > 1){
            throw ("you can craete only one constructor for rectangle");
        }
    }
    static #rectCount=0;
    area(){
        return(this.length*this.width);
    }
    perimeter(){
        return(2* (this.length+this.width));
    }
    static rectNumber(){
        return rectangle.#rectCount;
    }
}
class square extends shape{
    constructor(side){
        if(!side){
            throw("constructor should have arguments")
        }
        else if(typeof side !== "number"){
            throw("datatype should be Number")
        }
        super(side);
        this.length=side;
        square.#squareCount++;
        if(this.constructor.name === "square" && square.#squareCount > 1){
            throw ("you can craete only one constructor for square");
        }
    }
    static #squareCount=0;
    area(){
        return(this.length*this.length);
    }
    perimeter(){
        return(4*this.length);
    }
    static squareNumber(){
        return square.#squareCount;
    }
}
class circle extends shape{
    constructor(side){
        if(!side){
            throw("constructor should have arguments")
        }
        else if(typeof side !== "number"){
            throw("datatype should be Number")
        }
        super(side);
        this.radius=side;
        circle.#circleCount++;
    }
    static #circleCount=0;
    area(){
        return(Math.PI*this.radius*this.radius);
    }
    perimeter(){
        return(2*Math.PI*this.radius);
    }
    static circleNumber(){
        return circle.#circleCount;
    }
}
export {shape,rectangle,square,circle};