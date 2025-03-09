//Part 1
//Q1-->print array and the first and last element of array
var numbers = [10, 20, 30, 40, 50]
console.log(numbers,numbers[0],numbers[numbers.length-1])

//Q2-->add 60 at the end and remove the first element then print array
numbers.push(60)
console.log(numbers)
numbers.shift()
console.log(numbers) 

//Q3-->func take input:array out:each element [ Iterate Through an Array ]
function printArray(arr){
    for(var i =0; i<arr.length ;i++){
        console.log(arr[i]);
    }
}
printArray([10, 20, 30])

//Part 2

//Q1--> func in:array out: max # in the array
var j=0;
function findMax(arrNum){
    var max = arrNum[0];
    for (var j =0; j<arrNum.length;j++){
        if (arrNum[j]>max){
            max = arrNum[j];
        }
    }
    console.log(max)   
}
findMax([10, 50, 40, 30, 20])

//Q2 -->func in:array out:sum all # in the array
var sumArray =function(sumarr){
    var sum = 0;
    for (var k =0; k<sumarr.length;k++)
    {
        sum += sumarr[k];
    }
    console.log (sum);
}
sumArray([10,20,30,40,50])

//Q3-->func in:array out: An array of the even # from the first array
var filterEven=function(filtr){
    var even=[];
    for (var l = 0; l<filtr.length;l++)
    {
        if (filtr[l]%2==0)
        {
            even.push(filtr[l]);
        }
    }
    console.log(even);
}
filterEven([10, 15, 20, 25, 30]) 

//Q4-->func in:array out:how many # > 25 in the array
function countGreaterThan25(great){
    var n =0;
    for (var h =0; h<great.length;h++)
    {
        if (great[h]>25){
            n+=1;
        }
    }
    console.log(n)
}
countGreaterThan25([10, 20, 30, 40, 50])

//Q5--> func in:array out:remove duplicate # in the array
var removeDuplicates =function(duplicat){
    for(var u =0, c = 1; u<duplicat.length;u++,c++)
    {
        if (duplicat[u]==duplicat[c])
        {
            duplicat.splice(c, 1);
            c--;//must without it try [1, 2, 2, 2, 3, 3, 4]=>[1,2,2,3,4]
        }
    }
    console.log(duplicat)
}
removeDuplicates([1, 2, 2, 3, 3, 4]);
 