class shape{
    constructor(w=0,l=0){
        if(!w && !l){
            throw("constructor should have arguments")
        }
        else if(typeof w !== "number" ||typeof l !== "number"){
            throw("datatype should be Number")
        }
        this.width = w;
        this.length = l;
        const className=this.constructor.name;
        if(!shape.count[className]){
            shape.count[className]=0;
        }
        shape.count[className]++;
        if((className === "rectangle" || className ==="square") && shape.count[className] > 1){
            throw ("you can craete only one constructor");
        }
        if (className=== "square" && w !== l) {
            throw "square's width and length should be equal";
        }
        
    }
    static count ={};
    area(){
        return(this.length*this.width);
    }
    perimeter(){
        return(2* (this.length+this.width));
    }
    toString(){
        console.log(`Area is ${this.area()} and Perimeter is ${this.perimeter()}`);
    }
    static objectNumber(className){
       return shape.count[className];
    }
}
class rectangle extends shape{
    constructor(w,l){
        //check w>l
        if(w <= l){
            throw(" the width of rectangle should be greater than length")
        }
        super(l,w);
    }
}
class square extends shape{
    constructor(l){
        super(l,l);
    }
    area(){
        return(this.length*this.length);
    }
    perimeter(){
        return(4*this.length);
    }
}
class circle extends shape{
    constructor(r){
        super(1,1);
        if(typeof r !== "number"){
            throw("datatype should be Number")
        }
        this.radius=r;
    }
    area(){
        return(Math.PI*this.radius*this.radius);
    }
    perimeter(){
        return(2*Math.PI*this.radius);
    }
}
export {shape,rectangle,square,circle};