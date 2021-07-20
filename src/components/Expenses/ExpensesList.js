import '../../styles/ExpensesList.css'
import ExpenseItem from './ExpenseItem'

const ExpensesList=props=>{
    //let expenseContent=<p>No expense found</p>

   if( props.items.length ===0){
       return <h2 className='expense-list__fallback'>Found no expenses.</h2>
   }

    return(
        <ul className='expense-list__fallback'>
      {props.items.map((item) =>(
        <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
      ))}
      </ul>
    )   
}
export default ExpensesList