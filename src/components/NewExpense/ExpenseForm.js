import React,{useState, useRef} from 'react'
import '../../styles/ExpenseForm.css'
import ErrorModal from '../Error/ErrorModal';
const ExpenseForm =(props)=>{
    const [enteredTitle, SetEnteredTitle]=useState('');
    const [enteredAmount, SetEnteredAmount]=useState('');
    const [enteredDate, SetEnteredDate]=useState('');
    const [showForm, SetshowForm]=useState();
    const titleRef=useRef()
    //const[userInput,setuserInput]=useState({enteredTitle:'',enteredAmount:'',enteredDate:''})

    const titleChangeHandler=(event)=>{
        SetEnteredTitle(event.target.value)
        // setuserInput({
        //     ...userInput,
        //     enteredTitle:event.target.value
        // })
        //setuserInput((prevState)=>{ return {...prevState, enteredTitle:event.target.value}})
    }
    const amountChangeHandler=(event)=>{
        SetEnteredAmount(event.target.value)
        // setuserInput({
        //     ...userInput,
        //     enteredAmount:event.target.value
        // })
        //setuserInput((prevState)=>{ return {...prevState, enteredAmount:event.target.value}})
    }
    const dateChangeHandler=(event)=>{
        SetEnteredDate(event.target.value)
        // setuserInput({
        //     ...userInput,
        //     enteredDate:event.target.value
        // })
        //setuserInput((prevState)=>{ return {...prevState, enteredDate:event.target.value}})
    }

    const submitHandler=(event)=>{
        event.preventDefault();
        if(enteredTitle===""){
            SetshowForm({title:"Invalid Input", message:"Add valid title"});
        }
        if(enteredAmount <=0){
            SetshowForm({title:"Invalid Input", message:"Add amount > 0 "});
        }
        if(enteredDate===""){
            SetshowForm({title:"Invalid Input", message:"Add valid date"});
        }
        const expenseData={
            title:enteredTitle,
            amount:+enteredAmount,
            date:new Date(enteredDate)
        }

        //console.log(expenseData)
        props.onSaveExpenseData(expenseData)
        SetEnteredTitle('')
        SetEnteredAmount('')
        SetEnteredDate('')
    }
    const errorhandler=()=>{
        SetshowForm(null)
    }
    return(
        <React.Fragment>
            {showForm && <ErrorModal message={showForm.message} title={showForm.title} onConfirm={errorhandler}/>}
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text'  value={enteredTitle} onChange={titleChangeHandler} ref={titleRef}></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}></input>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Submit</button>
            </div>
        </form>
        </React.Fragment>
    )
}
export default ExpenseForm