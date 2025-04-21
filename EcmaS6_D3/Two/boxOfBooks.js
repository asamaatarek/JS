class box{
    constructor(h,w,l,m,c=[]){
        this.height=h;
        this.width=w;
        this.length=l;
        this.material=m;
        this.content=c;
    }
    get volume(){
        return this.height*this.width*this.length;
    }
    get numOfBooks(){
        return this.content.length;
    }
    deleteBook(b){
        for (let i= this.content.length-1;i>=0;i--)
        {
            const book = this.content[i];
            if (book.name === b || book.type === b){
                this.content.splice(i,1)
            }
        }
    }
    addBook(b){
        this.content.push(b);
    }
    toString(){
        console.log(`dimensions are : ${this.height}x${this.width}x${this.length} and number of books is ${this.numOfBooks}`);
    }
    valueOf(){
        return this.numOfBooks;
    }
     
}
class books{
    constructor(n,t,p,nCh,nP,nC){
        if (!n){
            throw("should have at least name of the book")
        }
        else if (typeof n !=="string"){
            throw("title should be string")
        }
        this.name=n;
        this.publisher=p;
        this.type=t;
        this.numOfChapter=nCh;
        this.numOfPages=nP;
        this.numOfCopies=nC;
    }
}
export{box,books};