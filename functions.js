//create a function to handle deposits into a bank account.

let bankAccount = {
    balance: 0
}

function deposit(amount){
if (amount > 0) {
    bankAccount.balance += amount;
    console.log(`Deposited $${amount}. Balance is now $${bankAccount.balance}`);
}
else {
    console.log('Deposit amount has to be more than 0');
}
}

//a function to handle withdrawals from a bank account, ensuring sufficient balance



function withdrawals(amount){
    if ((amount > 0) && (bankAccount.balance > amount)){
        bankAccount.balance -= amount;
        console.log(`Withdrawal $${amount}. Balance is now $${bankAccount.balance}`);
    }
    else {
        console.log('Insufficient funds or the withdrawal amount has to be more than 0');
    }
    }


function checkBalance(){
    console.log(`Balance is $${bankAccount.balance}`);
    }
   
deposit(10) //function to deposit money
withdrawals(8) //function to withdraw money
checkBalance()// fucntion to check balance
