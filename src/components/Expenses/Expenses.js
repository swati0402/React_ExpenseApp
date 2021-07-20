import React,{useState} from 'react'
import '../../styles/Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from'./ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpenseChart from './ExpenseChart'

const Expenses=(props)=>{
  const defaultFilterYear = 2022;
  const [filterYear, setFilterYear] = useState(defaultFilterYear);

  const selectYearHandler = (year) => {
    setFilterYear(year);
  };
  const filteredExpenses= props.expenses.filter(expense => {
    return expense.date.getFullYear().toString()=== filterYear
  })

    return(
      <li>
        <Card className="expenses">
        <ExpensesFilter onSelectYear={selectYearHandler}
          defaultFilterYear={defaultFilterYear}/>
          <ExpenseChart expenses={filteredExpenses}/>             
        <ExpensesList items={filteredExpenses}/>
      </Card>
      </li>
    )
}
export default Expenses