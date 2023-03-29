
//Checks if the field is empty and displays the appropriate message
function checkEmpty(element) {
    let obj = document.getElementById(element);
    let alert_obj = document.getElementById(element + "-empty-alert");
    if (obj.value == null || obj.value == "") {
        obj.style.borderColor = "#b32121"; 
        alert_obj.style.display = "block";
        alert_obj.style.color = "#b32121";
        return true;    
    } 
    obj.style.borderColor = "#d7d7d7";
    alert_obj.style.display = "none";  
    return false;    
}

//Checks if the name is valid and displays the appropriate message
function nameValid(element) {
    let obj = document.getElementById(element);
    let alert_obj = document.getElementById(element + "-invalid-alert");
    let regexName = new RegExp(/^[a-zA-Z]+ [a-zA-Z]+$/);
    if (obj.value.length > 30 || !regexName.test(obj)) {
        obj.style.borderColor = "#b32121"; 
        alert_obj.style.display = "block";
        alert_obj.style.color = "#b32121";
       
    } else {
        obj.style.borderColor = "#d7d7d7";
        alert_obj.style.display = "none";    
    }
}

//Checks if the contact number is valid and displays the appropriate message
function contactValid(element) {
    let obj = document.getElementById(element);
    let alert_obj = document.getElementById(element + "-invalid-alert");
    var regexIndianNumber = new RegExp("^[6-9]\d{9}$");
    if (obj.value.length != 10 && !regexIndianNumber.test(obj.value)) {
        obj.style.borderColor = "#b32121";
        alert_obj.style.display = "block";
        alert_obj.style.color = "#b32121";
    } else {
        obj.style.borderColor = "#d7d7d7";
        alert_obj.style.display = "none";
    }
}

//Checks if the pin number is valid and displays the appropriate message
function pinValid(element) {
    let obj = document.getElementById(element);
    let alert_obj = document.getElementById(element + "-invalid-alert");
    var regexIndianPincode = new RegExp(/^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/);
    if (obj.value.length != 6 && !regexIndianPincode.test(obj.value)) {
        obj.style.borderColor = "#b32121"; 
        alert_obj.style.display = "block";
        alert_obj.style.color = "#b32121";        
    } else {
        obj.style.borderColor = "#d7d7d7";
        alert_obj.style.display = "none";
    }
}

//Checks if the visa entered is valid and displays the appropriate message
function visaValid(element) {
    let obj = document.getElementById(element);
    let alert_obj = document.getElementById(element + "-invalid-alert");
    if (obj.value.length != 16) {
        obj.style.borderColor = "#b32121"; 
        alert_obj.style.display = "block";
        alert_obj.style.color = "#b32121";
       
    } else {
        obj.style.borderColor = "#d7d7d7";
        alert_obj.style.display = "none";   
    }
}

//Checks if the year is valid and displays the appropriate message
function yearValid(element) {
    let curr_year = new Date().getFullYear();
    let obj = document.getElementById(element);
    let alert_obj = document.getElementById(element + "-invalid-alert");
    if (obj.value < curr_year || obj.value.length!=4 || obj.value > 2100) {
        obj.style.borderColor = "#b32121"; 
        alert_obj.style.display = "block";
        alert_obj.style.color = "#b32121";
    } else {
        obj.style.borderColor = "#d7d7d7";
        alert_obj.style.display = "none";
    }
}

//Checks if the cvv is valid and displays the appropriate message
function cvvValid(element) {
    let obj = document.getElementById(element);
    let alert_obj = document.getElementById(element + "-invalid-alert");
    if (obj.value.length == 3 || obj.value.length == 4) {
        obj.style.borderColor = "#d7d7d7";
        alert_obj.style.display = "none";
    } else {  
        obj.style.borderColor = "#b32121"; 
        alert_obj.style.display = "block";
        alert_obj.style.color = "#b32121";
    }
}

//Checks if the mail is valid and displays the appropriate message
function mailValid(element) {
    let obj = document.getElementById(element);
    let alert_obj = document.getElementById(element + "-invalid-alert");  
    var regexMail = new RegExp('[a-z][0-9]+@[a-z]+\.[a-z]{2,3}$');  
    if ((obj.value.length > 50) || !regexMail.test(obj.value)) {
        obj.style.borderColor = "#b32121"; 
        alert_obj.style.display = "block";
        alert_obj.style.color = "#b32121";
        return true;
    } else {
        obj.style.borderColor = "#d7d7d7";
        alert_obj.style.display = "none";
        return false;
    }
}
// Checks if the field is empty and validates each field if it is not empty
function validateForm() {
    if (!checkEmpty("fname")) {
        nameValid("fname");
    }              
    if (!checkEmpty("lname")) {
        nameValid("lname");
    }
    if (!checkEmpty("mail")) {
        mailValid("mail");
    }
    if (!checkEmpty("contno")) {
        contactValid("contno");
    }    
    if (!checkEmpty("pincode")) {
        pinValid("pincode");
    }    
    if (!checkEmpty("cardno")) {
        visaValid("cardno");
    }        
    if (!checkEmpty("cardexpyear")) {
        yearValid("cardexpyear");
    }
    if (!checkEmpty("cvv")) {
        cvvValid("cvv");
    }
}   