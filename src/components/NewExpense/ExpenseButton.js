
const ExpenseButton=(props)=>{
    const onAddClick=()=>{
        const showForm =true;
        props.onAddClick(showForm)
    }
    return<button onClick={onAddClick}>Add New Expense</button>
}
export default ExpenseButton