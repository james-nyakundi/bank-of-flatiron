import React, { useEffect, useState } from "react";
import Transaction from "./Transaction";

const handleSubmit=()=>{}
fetch('http://localhost:8001/transactions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    date: '2022-12-31',
    description: 'Sample Description',
    category: 'Sample Category',
    amount: 100.50,
  }),
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

function TransactionsList() {
  const [transactions,setTransctions] = useState([])
  useEffect(()=>{
    
  fetch('http://localhost:8001/transactions')
  .then(response => response.json())
  .then(data => {
    setTransctions(data)
  });
},[])
console.log(transactions)
function Search({ transactions, setFilteredTransactions }) {
  const [searchTerm, setSearchTerm] = useState('');

  
  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    
    const filteredTransactions = transactions.filter(transaction =>
      transaction.description.toLowerCase().includes(searchTerm)
    );

    
    setFilteredTransactions(filteredTransactions);
  }};
  


  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {/* render a list of <Transaction> components here */}{
          transactions && transactions.map((trans)=>(
            
            <tr>
            <th>
              <p> {trans.date}</p>
            </th>
            <th>
              <p> {trans.description}</p>
            </th>
            <th>
              <p> {trans.category}</p>
            </th>
            <th>
              <p>{trans.amount}</p>
            </th>
          </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default TransactionsList;
