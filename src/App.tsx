import { useState } from "react";
import ExpenseTable from "./ExpenseTable/ExpenseTable";
import Form from "./Form/form";

 
function App() {

  return (
    <>
      <Form />
      <ExpenseTable data={[]}/>
    </>
    );



}

export default App;

