function colorChange(){
    var lastColor = ""
    return function (color) {
        var colorBox = document.getElementById("colorBox")
        if (lastColor === color) {
            colorBox.style.backgroundColor = "white"
            lastColor = ""
        } else {
            colorBox.style.backgroundColor = color;
            lastColor = color
        }
    }
}
var changeColor = colorChange();

document.getElementById("redBtn").addEventListener("click", function () {
    changeColor("red")
})
document.getElementById("greenBtn").addEventListener("click", function () {
    changeColor("green")
})
document.getElementById("blueBtn").addEventListener("click", function () {
    changeColor("blue")
})