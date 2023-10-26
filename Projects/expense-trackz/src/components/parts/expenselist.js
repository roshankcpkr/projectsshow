import React from "react";
import Item from "./expenseitem";
const ExpenseList = ({expenses, handleEdit, handleDelete, clearItems}) => {
    return(
        <>
        <ul>
         {expenses.map((expense)=>{
          return <Item 
          key={expense.id}
          expense={expense}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
           />
         })}   
        </ul>

         {expenses.length > 0 &&  <button 
         className="btn btn-primary mr-2 mb-2"
         onClick={clearItems}
         >Clear expenses</button>}

        </>
    );
}

export default ExpenseList