import React from "react";
import "../../App.css"
const ExpenseItem = ({expense, handleEdit, handleDelete}) => {
const {id, charge, amount} = expense    
    return(

          <ul className="item">
           <div className="info">
              <span className="expense">{charge} </span>
              <span className="amount">${amount}</span>
             </div>
             <div>
               <button
                className="edit-btn"
                onClick={()=>handleEdit(id)}>Edit</button>
               <button
                className="clear-btn"
                onClick={()=>handleDelete(id)}>Delete</button>
             </div>
          </ul>

        
    );
}

export default ExpenseItem;