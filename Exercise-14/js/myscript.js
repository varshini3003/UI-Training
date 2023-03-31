function displayAlert(obj, alert_obj){
    obj.style.borderColor = "#b32121"; 
    alert_obj.style.display = "block";
    alert_obj.style.color = "#b32121";
}
function noAlert(obj, alert_obj){
    obj.style.borderColor = "#d7d7d7";
    alert_obj.style.display = "none";  
}

/**
 * Checks if the field is empty and displays the appropriate message
 * @param {element}  - Input element
 * @returns true or false
 */
function checkEmpty(element) {
    let obj = document.getElementById(element);
    let alert_obj = document.getElementById(element + "-empty-alert");
    let invalid_alert_obj = document.getElementById(element + "-invalid-alert");
    noAlert(obj, alert_obj);
    noAlert(obj, invalid_alert_obj);
    if (obj.value == null || obj.value == "") {
        displayAlert(obj, alert_obj);   
        return true;
    } 
    else{
        noAlert(obj,alert_obj); 
        return false;
    }    
}


/**
 * Checks if the name is valid and displays the appropriate message
 * @param {element}  - Input element
 */
function nameValid(element) {
    let obj = document.getElementById(element);
    let alert_obj = document.getElementById(element + "-invalid-alert");
    noAlert(obj, alert_obj);
    let regexName = new RegExp("^{a-zA-Z}$");
    if (obj.value.length > 30 && !regexName.test(obj.value)) {
        displayAlert(obj, alert_obj);   
    } else {
        noAlert(obj,alert_obj);  
    }
}


/**
 * Checks if the contact number is valid and displays the appropriate message
 * @param {element}  - Input element
 */
function contactValid(element) {
    let obj = document.getElementById(element);
    let alert_obj = document.getElementById(element + "-invalid-alert");
    noAlert(obj, alert_obj);
    var regexIndianNumber = new RegExp("^[6-9]\d{9}$");
    if (obj.value.length != 10 && !regexIndianNumber.test(obj.value)) {
        displayAlert(obj, alert_obj);
    } else {
        noAlert(obj,alert_obj);
    }
}


/**
 * Checks if the pin number is valid and displays the appropriate message
 * @param {element}  - Input element
 */
function pinValid(element) {
    let obj = document.getElementById(element);
    let alert_obj = document.getElementById(element + "-invalid-alert");
    noAlert(obj, alert_obj);
    var regexIndianPincode = new RegExp(/^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/);
    if (obj.value.length != 6 && !regexIndianPincode.test(obj.value)) {
        displayAlert(obj, alert_obj);     
    } else {
        noAlert(obj,alert_obj);
    }
}

/**
 * Checks if the visa is valid and displays the appropriate message
 * @param {element}  - Input element
 */
function visaValid(element) {
    let obj = document.getElementById(element);
    let alert_obj = document.getElementById(element + "-invalid-alert");
    noAlert(obj, alert_obj);
    if (obj.value.length != 16) {
        displayAlert(obj, alert_obj);
    } else {
        noAlert(obj,alert_obj);  
    }
}

/**
 * Checks if the year is valid and displays the appropriate message
 * @param {element} - Input element
 */
function yearValid(element) {
    let curr_year = new Date().getFullYear();
    let obj = document.getElementById(element);
    let alert_obj = document.getElementById(element + "-invalid-alert");
    noAlert(obj, alert_obj);
    if (obj.value < curr_year || obj.value.length!=4 || obj.value > 2100) {
        displayAlert(obj, alert_obj);
    } else {
        noAlert(obj,alert_obj);
    }
}

/**
 * Checks if the cvv is valid and displays the appropriate message
 * @param {element} - Input element
 */
function cvvValid(element) {
    let obj = document.getElementById(element);
    let alert_obj = document.getElementById(element + "-invalid-alert");
    noAlert(obj, alert_obj);
    if (obj.value.length == 3 || obj.value.length == 4) {
        noAlert(obj,alert_obj);
    } else {  
        displayAlert(obj, alert_obj);
    }
}

/**
 * Checks if the mail is valid and displays the appropriate message
 * @param {element} - Input element
 */
function mailValid(element) {
    let obj = document.getElementById(element);
    let alert_obj = document.getElementById(element + "-invalid-alert");  
    noAlert(obj, alert_obj);
    var regexMail = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');  
    console.log(regexMail.test(obj.value));
    if ((obj.value.length > 50) || !regexMail.test(obj.value)) {
        displayAlert(obj, alert_obj);
    } else {
        noAlert(obj,alert_obj);
    }
}

/**
 * Checks if the input is not empty and validates the input
 */
function validateForm() {  
    
    if(!checkEmpty("f-name")){
        nameValid("f-name");
    }
    
    if(!checkEmpty("l-name")){
        nameValid("l-name");
    }
    
    if(!checkEmpty("mail")){
        mailValid("mail");
    }  
    
    if(!checkEmpty("cont-no")){
        contactValid("cont-no");
    }
    
    if(!checkEmpty("pincode")){
        pinValid("pincode");
    }
    
    if(!checkEmpty("card-no")){
        visaValid("card-no");
    }
    
    if(!checkEmpty("card-exp-year")){
        yearValid("card-exp-year");
    }
    
    if(!checkEmpty("cvv")){
        cvvValid("cvv");
    }   
}