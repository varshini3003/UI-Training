function calculate(event)
{ 
    let num1 = parseInt(prompt("Enter number 1"));
    if(!Number.isInteger(num1))
    {
        alert("Please enter a valid number...Click calculator again");
        event.preventDefault();
        
    }
    let num2 = parseInt(prompt("Enter number 2"));
    if(!Number.isInteger(num2))
    {
        alert("Please enter a valid number...Click calculator again");
        event.preventDefault();
    }
    choice = parseInt(prompt("Press 1 for Addition, 2 for Subtraction, 3 for Multiplication and 4 for Division"));
    
    calculator = {
        addition: "Addition", add(a, b) {
            return a+b;
        },
        subtraction: "Subtraction", subtract(a, b) {
            return a-b;
        },
        multiplication: "Multiplication", multiply(a, b) {
            return a*b;
        },
        division: "Division", divide(a, b) {
            return a/b;
        }
    }
    switch(choice)
    {
        case 1:  
            document.getElementById("calc").innerHTML =
             "Addition is " + calculator.add(num1, num2) ;
            break;
        case 2:
            document.getElementById("calc").innerHTML =
             "Subtraction is " + calculator.subtract(num1, num2) ;
            break;
        case 3:
            document.getElementById("calc").innerHTML =
             "Multiplication is " + calculator.multiply(num1, num2) ;
            break;
        case 4:
            document.getElementById("calc").innerHTML =
             "Division is " + calculator.divide(num1, num2) ;
            break;
        default:
            alert("Please enter a valid choice...");
    }
}


 