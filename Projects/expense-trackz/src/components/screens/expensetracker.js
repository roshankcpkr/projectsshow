import React, {useState, useEffect} from "react";
import Header from "../parts/header";
import Footer from "../parts/footer";
import Alert from "../parts/alert";
import ExpenseForm from "../parts/expenseform";
import ExpenseList from "../parts/expenselist";

const { uuid } = require ('uuidv4');

// const initialExpense = [
//     {id:uuid(), charge:"rent", amount:1200},
//     {id:uuid(), charge:"food", amount:150},
//     {id:uuid(), charge:"bills", amount:1300}
// ];

const initialExpense = localStorage.getItem('expenses')? 
JSON.parse(localStorage.getItem('expenses')):[]

const ExpenseTracker = () => {
  //Alert 
  const [alert, setAlert] = useState({show:false});
  // State values
    const [expenses, setExpenses] = useState(initialExpense);
    const [charge, setCharge] = useState('');
    const [amount, setAmount] = useState('');
  // Edit Items
   const [edit, setEdit] = useState(false)
   const[id, setId] = useState(0);
   //useEffect
 
    useEffect(() => {
      localStorage.setItem('expenses', JSON.stringify(expenses))
    },[expenses]);

    //functions
    //handle Expenses
    const handleCharge = e =>{
      setCharge(e.target.value)
    };
    //handel Amopunt
    const handleAmount = e =>{
      setAmount(e.target.value)
    };
    //handle Alert
    const handleAlert = ({type, text}) => {
      
      setAlert({show:true, type, text});
      setTimeout(()=>{
       setAlert({show:false})
      },3000)
    }
    //Handle Submit
    const handleSubmit = e =>{
      e.preventDefault();
      
      if(charge !== '' && amount > 0){
        if(edit){
          let tempExpenses= expenses.map(item => {
            return item.id === id? {...item, charge, amount} : item
          });
          setExpenses(tempExpenses);
          setEdit(false);
        }
        else{
          const singleExpense = {id:uuid(), charge,amount};
          setExpenses([...expenses,singleExpense]);
          handleAlert({type:'success', text:'New expense added'});
        }
         setCharge('');
         setAmount('');
      }
      else{
        //handle alert calls
        handleAlert({type:'danger', text:`Expense cannot be empty`})
      }
    };

     //Delete all expenses
     const clearItems = () => {
      setExpenses([]);
      handleAlert({type:'danger', text:'All expense deleted'})
     }
     // handle Delete
     
     const handleDelete = (id) => {
      let tempExpenses = expenses.filter(item => item.id !== id);
      setExpenses(tempExpenses);
      handleAlert({type:'danger', text:'expense deleted'})
     }
     //Handle Edit
      
     const handleEdit = (id) => {
     let expense = expenses.find(item => item.id === id);
     let {charge, amount} = expense;
     setCharge(charge);
     setAmount(amount);
     setEdit(true);
     setId(id);
     }

    return(
    <>
        <Header />
          {alert.show && <Alert type={alert.type} text={alert.text} />}
         <Alert />
         <div className="site-section bg-light" id="about-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h1 className="section-title mb-3">Budget Calculator</h1>
         <ExpenseForm charge ={charge} amount={amount}
          handleAmount={handleAmount}
          handleCharge={handleCharge}
          handleSubmit={handleSubmit}
          edit={edit} />

         <ExpenseList
          expenses={expenses}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          clearItems={clearItems} />
         
          <h3 className="section-title mb-3">Total spending : <span>$ {expenses.reduce((acc, curr) =>{
              return acc += parseInt(curr.amount)
          },0)}</span> </h3>
     
        </div>
      </div>
  </div>
</div>

        <Footer />
        </>
    );
}

export default ExpenseTracker;