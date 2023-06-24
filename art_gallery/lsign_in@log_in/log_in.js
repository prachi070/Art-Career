

function validateform() {
    var name = document.myForm.fname.value;
    var passwordlength = document.myForm.fpass.value;

    var status = false;

    if (name.length == "") {
        document.getElementById("formerror1").innerHTML =" *Please enter your name";
        status = false;
    } else {
        document.getElementById("formerror1").innerHTML = " ";
        status = true;
    }


    if (passwordlength.length < 6) {
        document.getElementById("formerror4").innerHTML =" *Password must be greater than 6";
        status = false;
    } else {
        document.getElementById("formerror4").innerHTML = " ";
        status = true;

    }
    
    return status;

  
}

