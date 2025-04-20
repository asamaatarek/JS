class box{
    constructor(h,w,l){
        this.height=h;
        this.width=w;
        this.length=l;
        this.content=[]
    }
    dimensions(){
        return `height is ${this.height},width is ${this.width},length is ${this.length}`;
    }
    get count(){
        return this.content.length;
    }
    delete(book){
        this.content.pop(book);
    }
    createBook(b){
        this.content.push(b);
    }
    toString(){
        console.log(`dimensions are : ${this.dimensions()} and number of books is ${this.count}`);
    }
    valueOf(){
        return this.count;
    }
     
}
class books{
    constructor(n,t){
        if (!t){
            throw("should have one argument title of the book")
        }
        else if (this.constructor="string"){
            throw("title should be string")
        }
        this.name=n;
        this.publisher=p;
        this.type=t;
    }
}