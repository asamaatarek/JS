document.getElementById("registrationForm").addEventListener("submit", function (e) {
    var isValid = true;
    //fullName
    var fullName = document.getElementById("fullName").value
    var nameError = document.getElementById("nameError");
    var regName = /^[a-zA-Z\s]{3,}$/
    if (!regName.test(fullName)){
        nameError.style.display = "block";
        isValid = false;
    } else {
        nameError.style.display = "none";
    }
    //email
    var email = document.getElementById("email").value
    var emailError = document.getElementById("emailError")
    var regEmail = /^[a-zA-Z_]+\d*@[a-zA-Z]+\.[a-zA-Z]{2,}$/
    if (!regEmail.test(email)){
        emailError.style.display = "block";
        isValid = false;
    } else {
        emailError.style.display = "none";
    } 
      //password
    var password = document.getElementById("password").value
    var passwordError = document.getElementById("passwordError");
    var regPasswd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
    if (!regPasswd.test(password)){
        passwordError.style.display = "block"
        isValid = false;
    } else { 
        passwordError.style.display = "none"
    }
    //phone
    var phone = document.getElementById("phone").value
    var phoneError = document.getElementById("phoneError")
    var regPhone = /^01\d{9}$/
    if (!regPhone.test(phone)) {
        phoneError.style.display = "block";
        isValid = false;
    } else {
        phoneError.style.display = "none";
    }
    //age
    var age = +document.getElementById("age").value
    var ageError = document.getElementById("ageError")
    if ( age < 18 || age > 60){
        ageError.style.display = "block";
        isValid = false;
    } else {
        ageError.style.display = "none";
    }
    //gender
    var male = document.getElementById("male").checked
    var female = document.getElementById("female").checked
    var genderError = document.getElementById("genderError")
    if (!male && !female) {
        genderError.style.display = "block";
        isValid = false;
    } else {
        genderError.style.display = "none";
    }

    if((!isValid)) {
        e.preventDefault()
      }else {
        e.target.reset();
       /* document.getElementById("fullName").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("age").value = "";
        document.getElementById("male").value = "";
        document.getElementById("female").value = "";*/
      }
})