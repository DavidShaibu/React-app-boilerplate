import { FormEvent, useRef, useState } from "react";

const form = () => {

  const [person, setPerson] = useState({
    item: "",
    amount: 0,
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(person);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Name
        </label>
        <input
          onChange={(event) =>
            setPerson({ ...person, item: event.target.value })
          }
          value={person.item}
          id="description"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          onChange={(event) =>
            setPerson({ ...person, amount: parseInt(event.target.value) })
          }
          value={person.amount}
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
