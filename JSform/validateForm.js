function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var birthday = document.getElementById("birthday").value;
    var indexOf = birthday.indexOf("/");
    var birthdayDate = birthday.substring(0, indexOf);
    var birthday = new Date(String(monthNum) + "/" + birthdayDate + "/" + String(yearNum));

    if (username.length >= 8) {
        document.getElementById("username_error").innerHTML = "";
    } else {
        document.getElementById("username_error").innerHTML = "Username length min 8 letters";
        return false;
    }
    
    if (password.length >= 8) {
        document.getElementById("password_error").innerHTML = "";
    } else {
        document.getElementById("password_error").innerHTML = "Password length min 8 letters";
        return false;
    }
    
    if (email.length >= 8) {
        document.getElementById("email_error").innerHTML = "";
    } else {
        document.getElementById("email_error").innerHTML = "Email length min 8 letters";
        return false;
    }
    
    if (birthday < today) {
        document.getElementById("birthday_error").innerHTML = "";
    } else {
        document.getElementById("birthday_error").innerHTML = "Birthday phải bé hơn ngày hiện tại";
        return false;
    }
   
    return true;
}