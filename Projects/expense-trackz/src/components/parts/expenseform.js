import React from "react";

const ExpenseForm = ({charge, amount, handleCharge, handleAmount, handleSubmit, edit}) => {
    return(
      <form onSubmit={handleSubmit}>
          <div className="form-center">
              <div className="form-group">
                  <label htmlFor="charge">Expense</label>
                  <input type="text" className="form-control" id="charge"
                   name="charge"
                   placeholder="example: Rents"
                   value={charge}
                   onChange={handleCharge}/>
              </div>

              <div className="form-group">
                  <label htmlFor="amount">Amount</label>
                  <input type="number"
                   className="form-control"
                   id="amount"
                   name="amount"
                   placeholder="example:1000"
                   value={amount}
                   onChange={handleAmount}/>
              </div>

          </div>

    <button type="submit" className="btn btn-primary">{edit?'edit': 'submit'}</button>
      </form>
    );
}

export default ExpenseForm;