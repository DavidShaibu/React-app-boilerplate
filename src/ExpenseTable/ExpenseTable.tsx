import { useState } from "react";

interface Props {
    data: object[];
};

const ExpenseTable = ({ data }: Props) => {

  const [datata, setDatata]= useState([
    { id: 1, description: "Milk", amount: 5.00, category: 'Groceries'},
    { id: 2, description: "Movies", amount: 30.00, category: 'Entertainment'},
    { id: 3, description: "Eggs", amount: 2.00, category: 'Groceries'},
    { id: 4, description: "Electricity", amount: 100.00, category: 'Utilities'}
  ]);

//   datata = [];

  const [selectedCategory, setSelectedCategory] = useState("All");

  let filteredData = datata.filter((item) => selectedCategory === "All" ? true : item.category === selectedCategory);
  const total = filteredData.reduce((sum, current) => sum + current.amount, 0);

  const handleClick = (id: number) => {
    setDatata(prevData => prevData.filter(item => item.id !== id));
  }

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
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Description</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Category</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {datata.length === 0 ? (
                <tr>
                    <td></td>
                    <td>No Item found</td>
                    <td></td>
                </tr>) : (
                    filteredData
                      .map(item => (
                        <tr key={item.description}>
                          <td scope="row">{item.description}</td>
                          <td>{`$${item.amount.toFixed(2)}`}</td>
                          <td>{item.category}</td>
                          <td><button onClick={() => handleClick(item.id)} className="btn btn-danger">Delete</button></td>
                        </tr>
                      ))
                )}
                <tr>
                    <td scope="row">Total:</td>
                    <td>{`$${total.toFixed(2)}`}</td>
                    <td></td>
                    <td></td>
                </tr>

            </tbody>
        </table>
    </>
  )
}

export default ExpenseTable