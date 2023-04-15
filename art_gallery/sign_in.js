

function validateform() {
    var name = document.myForm.fname.value;
    var passwordlength = document.myForm.fpass.value;
    var email=document.myForm.femail.value;
    var phone=document.myForm.fphone.value;
    var status = false;
    if (name.length == "") {
        document.getElementById("formerror1").innerHTML =" *Please enter your name";
        status = false;
    } else {
        document.getElementById("formerror1").innerHTML = " ";
        status = true;
    }

    if(email.length==""){
        document.getElementById("formerror2").innerHTML =" *Please enter your email";
        status = false;
    }else {
        document.getElementById("formerror2").innerHTML = " ";
        status = true;
    }


    
    if(phone.length==""){
        document.getElementById("formerror3").innerHTML =" *Please enter your phone";
        status = false;
    }else {
        document.getElementById("formerror3").innerHTML = " ";
        status = true;
    }

   

    

    if (passwordlength.length < 6) {
        document.getElementById("formerror4").innerHTML =" *Password must be greater than 6";
        status = false;
    } else {
        document.getElementById("formerror4").innerHTML = " ";
    }

    return status;
}
