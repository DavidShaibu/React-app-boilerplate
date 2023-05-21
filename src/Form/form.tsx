import { useRef } from "react";

const form = () => {
  
  const nameRef = useRef<HTMLInputElement>(null);  
  const ageRef = useRef<HTMLInputElement>(null);
  const person = {name: "", age: 0};
    
  return (
    <form onSubmit={(event) => {
        event.preventDefault();

        if (nameRef.current != null)
        person.name = nameRef.current.value;

        if(ageRef.current != null)
        person.age = parseInt(ageRef.current.value);

        console.log(person);
        }}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Name
        </label>
        <input ref={nameRef} id="description" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input ref={ageRef} id="amount" type="number" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">Category</label>
        <input id="category" type="text" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default form;
