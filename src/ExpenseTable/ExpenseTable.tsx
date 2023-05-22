import { useState } from "react";

interface ExpenseItem {
    id: number;
    item: string;
    amount: number;
    category: string;
  }

interface Props {
    dataArray: ExpenseItem[],
    setDataArray: React.Dispatch<React.SetStateAction<ExpenseItem[]>>,
    onDelete: (id:number) => void
};


const ExpenseTable = ({ dataArray, setDataArray, onDelete }: Props) => {

//   const [datata, setDatata]= useState([
//     { id: 1, description: "Milk", amount: 5.00, category: 'Groceries'},
//     { id: 2, description: "Movies", amount: 30.00, category: 'Entertainment'},
//     { id: 3, description: "Eggs", amount: 2.00, category: 'Groceries'},
//     { id: 4, description: "Electricity", amount: 100.00, category: 'Utilities'}
//   ]);


  const [selectedCategory, setSelectedCategory] = useState("All");

  let filteredData = dataArray.filter((item) => selectedCategory === "All" ? true : item.category === selectedCategory);
  const total = filteredData.reduce((sum, current) => sum + current.amount, 0);

//   const handleClick = (id: number) => {
//     setDataArray(prevData => prevData.filter((item) => (item as Item).id !== id));
//   }

  return (
    <>
        <div className="container my-4">
            <label htmlFor="mySelect">Select a category:</label>
            <select onChange={(event) => setSelectedCategory(event.target.value)} className="form-select" id="mySelect">
                <option value="All">All items</option>
                <option value="Groceries">Groceries</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Utilities">Utilities</option>
            </select>
        </div>
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">Description</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Category</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {dataArray.length === 0 ? (
                <tr>
                    <td></td>
                    <td>No Item found</td>
                    <td></td>
                </tr>) : (
                    filteredData
                      .map(item => (
                        <tr key={item.id}>
                          <td>{item.item}</td>
                          <td>{`$${item.amount.toFixed(2)}`}</td>
                          <td>{item.category}</td>
                          <td><button onClick={() => onDelete(item.id)} className="btn btn-danger">Delete</button></td>
                        </tr>
                      ))
                )}
            </tbody>
            <tfoot>
                <tr>
                    <td scope="row">Total:</td>
                    <td>{`$${total.toFixed(2)}`}</td>
                    <td></td>
                    <td></td>
                </tr>
            </tfoot>
        </table>
    </>
  )
}

export default ExpenseTable