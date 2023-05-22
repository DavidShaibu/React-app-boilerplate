import React, { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  item: z.string().min(3, {message: "Name must be at least 3 characters"}),
  amount: z.number({ invalid_type_error: "Amount field is required" }).min(0),
  category: z.enum(["Groceries", "Entertainment", "Utilities"])
});

type FormData = z.infer<typeof schema>;

interface Props {
    dataArray: ExpenseItem[],
    setDataArray: React.Dispatch<React.SetStateAction<ExpenseItem[]>>,
    onSubmit: (data: FieldValues) => void;
}

interface ExpenseItem {
    id: number;
    item: string;
    amount: number;
    category: string;
  }

const form = ({ dataArray, setDataArray, onSubmit } : Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({resolver: zodResolver(schema)});
  

  return (
    <form onSubmit={handleSubmit(data => {
        onSubmit(data);
        reset();
    })}>
      <div className="mb-3">
        <label htmlFor="item" className="form-label">
          Name
        </label>
        <input
          {...register("item")}
          id="item"
          type="text"
          className="form-control"
        />
        {errors.item && (
          <p className="text-danger">{errors.item.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", {valueAsNumber: true})}
          id="amount"
          type="number"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select {...register("category")} className="form-select" id="category">
            <option value=""></option>
            <option value="Groceries">Groceries</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Utilities">Utilities</option>
        </select>
      </div>
      <button disabled={!isValid} type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default form;
