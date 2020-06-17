

const WALLETS_KEY = 'Wallets';












// https://getbootstrap.com/docs/4.0/components/modal/#events








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





class Transaction {
    constructor(name) {
        this.name
    }
}
class Expense extends Transaction {

}

class Income extends Transaction {

}

console.log(

    (new Income('nnnn') instanceof Expense));