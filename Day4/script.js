function addrow(){
    var name = document.getElementById("studentName").value
    var mark = +document.getElementById("studentMarks").value
    var tableBody = document.getElementById("studentTable")
	//check if they are empty
    if (name == "" || mark == "")
    {
        alert("Enter Name and Mark")
        return ;
    }
	//grade
    var grade;
    if (mark > 100){
        alert("Enter a vaid number")
        return;
    }
    else if (mark>=85 && mark <= 100)
    {
        grade = "A";
    }
    else if(mark>=70 && mark < 85)
    {
        grade = "B";
    } 
    else if(mark>=50 && mark < 70)
    {
        grade = "C";
    }
    else {
        grade = "F"
    }
    
   var nametd = document.createElement("td")
   nametd.textContent = name

   var marktd = document.createElement("td")
   marktd.textContent = mark 

   var gradetd = document.createElement("td")
   gradetd.textContent = grade

   var delButton = document.createElement("button")
   delButton.textContent = "delete row"

   delButton.onclick = function () { 
    tableBody.removeChild(row);
   }

   var row = document.createElement("tr")
   row.appendChild(nametd)
   row.appendChild(marktd)
   row.appendChild(gradetd)
   row.appendChild(delButton)
   tableBody.appendChild(row)

   var color = document.querySelectorAll("#studentTable tr");
    for (var i = 0; i < color.length; i++) {
        if (i % 2 == 0) {
            color[i].style.backgroundColor = "red"
        }
        else{
            color[i].style.backgroundColor = "green"
        }
    }
    document.getElementById("studentName").value = "";
    document.getElementById("studentMarks").value = "";
}