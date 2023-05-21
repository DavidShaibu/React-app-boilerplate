import { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form"

interface FormData{
    item: string;
    amount: number;
    category: string;
}

const form = () => {

  const { register, handleSubmit, formState: {errors} } = useForm<FormData>();
  console.log(errors)
  const onSubmit = (data: FieldValues) => {console.log(data)};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="item" className="form-label">
          Name
        </label>
        <input
          {...register("item", {required: true, minLength:3})}  
          id="item"
          type="text"
          className="form-control"
        />
        {errors.item?.type === "required" && <p className="text-danger">The name field is required</p>}
        {errors.item?.type === "minLength" && <p className="text-danger">The must be at least 3 characters</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount")}
          id="amount"
          type="number"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <input id="category" type="text" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default form;
