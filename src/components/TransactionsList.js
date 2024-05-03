import React, { useEffect, useState } from "react";
import Transaction from "./Transaction";


function TransactionsList() {
  const [transactions,setTransctions] = useState([])
  useEffect(()=>{
    
  fetch('https://bank-of-flatiron-ydn8.onrender.com')
  .then(response => response.json())
  .then(data => {
    setTransctions(data)
  });
},[])
console.log(transactions)
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
          
          <tr
            key={trans.id}>
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