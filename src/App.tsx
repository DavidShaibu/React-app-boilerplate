import { useState } from "react";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import categories from "./expense-tracker/categories";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    {id:1, description: "aaa", amount:10, category: "Utilities"},
    {id:2, description: "bbb", amount:10, category: "Utilities"},
    {id:3, description: "ccc", amount:10, category: "Utilities"},
    {id:4, description: "ddd", amount:10, category: "Utilities"},
  ]);

  if (expenses.length === 0) return null;

  const visibleExpenses = selectedCategory ? expenses.filter(expense => expense.category === selectedCategory) : expenses;

  return (
    <>
      <div className="mb-3">
        <ExpenseForm onSubmit={(expense) => setExpenses([...expenses, {...expense, id: expenses.length + 1}])}/>
      </div>
      <div className="mb-3">
        <ExpenseFilter onSelectCategory={(category) => setSelectedCategory(category)}/>
      </div>
      <ExpenseList expenses={visibleExpenses} onDelete={(id) => setExpenses(expenses.filter(expense => expense.id !== id))}/>
    </>
    );

}

export default App;

