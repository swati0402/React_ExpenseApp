import '../../styles/NewExpense.css'
import ExpenseForm from'./ExpenseForm'
import ExpenseButton from './ExpenseButton'
import React,{useState} from 'react'

const NewExpense=(props)=>{
    const [showForm, SetshowForm]=useState(false);
    const saveExpenseDatahandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        }
       // console.log(expenseData)   
       props.onSaveNewExpense(expenseData)
    }

    const submitHandler=(data)=>{
        //console.log(data) 
        SetshowForm(data);
    }
    const cancelHandler=()=>{
        SetshowForm(false); 
        //console.log(showForm)
    }
    let expenseContent=<ExpenseButton onAddClick={submitHandler}/>

    if(showForm ===true){
        expenseContent=<ExpenseForm onSaveExpenseData={saveExpenseDatahandler}
         onCancel={cancelHandler}/>
    }
    else{
        expenseContent=<ExpenseButton onAddClick={submitHandler}/>
    }
    return(
        <div className="new-expense">
            {expenseContent}           
        </div>
    )
}
export default NewExpense;