

const WALLETS_KEY = 'Wallets';


// Shadan Start

const userName=document.getElementById('user-name')
const CurrencyGroup=document.querySelectorAll('input[name="CurrencyGroup"]')
const balance=document.getElementById('Balance-input')
const Description=document.getElementById('Desc-input')
const btnForm=document.getElementById("btnForm")
let createdWallets = JSON.parse(localStorage.getItem('createdWallets')) || [];
/*
function RadioCheck(){
    let selectedValue;
    for(const val of CurrencyGroup){
        if(val.checked)
        {
            selectedValue=val.value;
        break;

        }
        
    }
    return selectedValue
}
function addWallet(userName,balance,Description){
  const userObj={
    userName:userName.vaue,
    balance:balance.value,
    Description:Description.value
  }
  createdWallets.push(userObj)
  localStorage.setItem('createdWallets', JSON.stringify(createdWallets));
  console.log(userObj)
}

btnForm.addEventListener('submit',(e)=>{
    e.preventDefault;
    addWallet(userName,balance,Description)

}); 
*/


// Shadan End








// Hanan Start







// Hanan End




// https://getbootstrap.com/docs/4.0/components/modal/#events




// Qays Start

class Wallet {
    constructor( id,name,   currency ,balance ,description ,transactions=[]) {
        this.id=id;
        this.name=name;
        this.currency=currency;
        this.balance=balance;
        this.description=description;
        this.transactions=transactions;

    }
}
class Currency {
    constructor(id,name,symbol ) {
        this.id = id;
        this.name = name;
        this.symbol = symbol;

    }
}
class Transaction {
    constructor(amount, date ,note ,tags=[] ) {
        this.amount = amount;
        this.date = date;
        this.note = note;
        this.tags=tags;
    }




}
class Expense extends Transaction {
}

class Income extends Transaction {

}

// console.log((new Income('nnnn') instanceof Expense));

// Qays End





// Objects
//                                            String Object   number  string
// Wallet     properties  "id random number"  Name   Currency Balance Description transactions
// set balance(updateBalance)=> this.balance = updateBalance(balance);
//             ^this is a method form transaction
// addNewTransaction(transaction) 
// read from localStorage()=>Wallets List 
/////////////// read all transactionsForWalletFromStorage()=> listOfTransaction
// renderTransactions(ul from Dom)=> change the dom 

// Transaction  properties  amount  Date() date note tags  
// renderTransaction()=> html  except the price text


// Expense    extends Transaction   -  
// method updateBalance function(balance) => newBalance 
// super.renderTransaction() renderTransaction() only the price text


// Income      extends Transaction   +
// method updateBalance function(balance) => newBalance 
// super.renderTransaction() renderTransaction() only the price text



// Currency    properties id name symbol 




