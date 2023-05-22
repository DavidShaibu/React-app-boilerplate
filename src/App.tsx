import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import ExpenseTable from "./ExpenseTable/ExpenseTable";
import Form from "./Form/form";

interface ExpenseItem {
  id: number;
  item: string;
  amount: number;
  category: string;
}
 
function App() {
  const handleDelete = (id: number) => {
    setDataArray(prevData => prevData.filter((item) => (item as ExpenseItem).id !== id));
  }

  const [dataArray, setDataArray] = useState<ExpenseItem[]>([{ id: 1, item: "Milk", amount: 5.00, category: 'Groceries'}]);

  const [id, setID] = useState(2);

  const handleSubmit = (data: FieldValues ) => {
      const updatedDataArray = [...dataArray];
      data.id = id;
      updatedDataArray.push(data as ExpenseItem);
      setDataArray(updatedDataArray);
      setID(prevID => prevID +1);
      console.log(dataArray);
  
    };
  return (
    <>
      <Form onSubmit={handleSubmit} dataArray={dataArray} setDataArray={setDataArray }/>
      <ExpenseTable onDelete={handleDelete} dataArray={dataArray} setDataArray={setDataArray}/>
    </>
    );

}

export default App;

