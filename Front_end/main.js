//To validate blank spaces
function validateFormOnSubmit(theForm) {
    var reason = "";
    reason += validateUsername(theForm.username);
    reason += validatePassword(theForm.pwd);
    reason += validateEmail(theForm.email);
    reason += validatePhone(theForm.phone);
    reason += validateEmpty(theForm.from);
        
    if (reason != "") {
      alert("Some fields need correction:\n" + reason);
      return false;
    }

    return true;
}
      
//To validate empty spaces
function validateEmpty(fld) {
    var error = "";
 
    if (fld.value.length == 0) {
        fld.style.border = 'red'; 
        error = "The required field has not been filled in.\n"
    } else {
        fld.style.background = 'White';
    }
    return error;  
}

//To validate name field
function validateUsername(fld) {
    var error = "";
    var illegalChars = /\W/; // allow letters, numbers, and underscores
 
    if (fld.value == "") {
        fld.style.border = 'red'; 
        error = "You didn't enter a username.\n";
    } else if ((fld.value.length < 5) || (fld.value.length > 15)) {
        fld.style.border = 'red'; 
        error = "The username is the wrong length.\n";
    } else if (illegalChars.test(fld.value)) {
        fld.style.border = 'red'; 
        error = "The username contains illegal characters.\n";
    } else {
        fld.style.background = 'White';
    }
    return error;
}    

//To validate password field
function validatePassword(fld) {
    var error = "";
    var illegalChars = /[\W_]/; // allow only letters and numbers 
 
    if (fld.value == "") {
        fld.style.border = 'red'; 
        error = "You didn't enter a password.\n";
    } else if ((fld.value.length < 7) || (fld.value.length > 15)) {
        error = "The password is the wrong length. \n";
        fld.style.border = 'red'; 
    } else if (illegalChars.test(fld.value)) {
        error = "The password contains illegal characters.\n";
        fld.style.border = 'red'; 
    } else if (!((fld.value.search(/(a-z)+/)) && (fld.value.search(/(0-9)+/)))) {
        error = "The password must contain at least one numeral.\n";
        fld.style.border = 'red'; 
    } else {
        fld.style.background = 'White';
    }
   return error;
}      

//To validate email field
function trim(s)
{
    return s.replace(/^\s+|\s+$/, '');
}
    
function validateEmail(fld) {
    var error="";
    var tfld = trim(fld.value);                        // value of field with whitespace trimmed off
    var emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/ ;
    var illegalChars= /[\(\)\<\>\,\;\:\\\"\[\]]/ ;
   
    if (fld.value == "") {
        fld.style.border = 'red'; 
        error = "You didn't enter an email address.\n";
    } else if (!emailFilter.test(tfld)) {              //test email for illegal characters
        fld.style.border = 'red'; 
        error = "Please enter a valid email address.\n";
    } else if (fld.value.match(illegalChars)) {
        fld.style.border = 'red'; 
        error = "The email address contains illegal characters.\n";
    } else {
        fld.style.background = 'White';
    }
    return error;   
}
    
//To validate contact number   
function validatePhone(fld) {
    var error = "";
    var stripped = fld.value.replace(/[\(\)\.\-\ ]/g, '');    

   if (fld.value == "") {
        error = "You didn't enter a phone number.\n";
        fld.style.border = 'red'; 
    } else if (isNaN(parseInt(stripped))) {
        error = "The phone number contains illegal characters.\n";
        fld.style.border = 'red'; 
    } else if (!(stripped.length == 10)) {
        error = "The phone number is the wrong length. Make sure you included an area code.\n";
        fld.style.border = 'red'; 
    }
    return error;
}

