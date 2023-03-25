function performTransaction(choice, cardNumber, pinNumber, amount)
{
    const accounts = [
        {
            accountNumber: "3459854886474241",
            cardNumber: "565453623478",
            pinNumber: "1643",
            balance: 8500
        },
        {
            accountNumber: "6786535633424345",
            cardNumber: "678921345366",
            pinNumber: "2456",
            balance: 9000
        },
        {
            accountNumber: "3478631134677536",
            cardNumber: "7890",
            pinNumber: "2987",
            balance: 7500
        },
        {
            accountNumber: "4238697845619807",
            cardNumber: "8901",
            pinNumber: "5633",
            balance: 4000
        },
        {
            accountNumber: "23847454221678",
            cardNumber: "9012",
            pinNumber: "3786",
            balance: 18070
        }
    ];
    choice == 1 ? depositUsingCDM(cardNumber, pinNumber, amount) : withdrawUsingATM(cardNumber, pinNumber, amount);
    function findAccount(cardNumber, pinNumber) {
      return accounts.find(
        account => account.cardNumber == cardNumber && account.pinNumber == pinNumber
      );
    }
    function withdrawUsingATM(cardNumber, pinNumber, amount) {
      var invalidMsg = "Please enter valid card number or PIN";
      var balanceMsg = "Insufficient balance";
      const accountFound = findAccount(cardNumber, pinNumber); 
      if (!accountFound) {
        document.getElementById("transact-result").innerHTML = invalidMsg;
        return;
      }
      if (accountFound.balance < amount) {
        document.getElementById("transact-result").innerHTML = balanceMsg;
        return;
      }
      accountFound.balance -= amount;
      let successMsg = 'Amount Withrawn: ' +amount+ ', Current Balance: '+accountFound.balance;
      document.getElementById("transact-result").innerHTML = successMsg;
    }

    function depositUsingCDM(cardNumber, pinNumber, amount) {
      var invalidMsg = "Please enter valid card number or PIN";
      var balanceMsg = "Insufficient balance";
      const accountFound = findAccount(cardNumber, pinNumber);
      if (!accountFound) {
        document.getElementById("transact-result").innerHTML = invalidMsg;
        return;
      }
      accountFound.balance += amount;
      let successMsg='Amount Deposited: '+amount+', Current Balance : '+accountFound.balance;
      document.getElementById("transact-result").innerHTML = successMsg;
    }
}
var choice = parseInt(window.prompt("Press: 1. Deposit 2. Withdraw"));
var cardNumber = parseInt(window.prompt("Enter your Card Number"));
var pinNumber = parseInt(window.prompt("Enter your Pin Number"));
var amount = parseInt(window.prompt("Enter the amount"));
performTransaction(choice, cardNumber, pinNumber, amount);