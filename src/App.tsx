import { useEffect, useRef, useState } from "react";
import axios, { AxiosError, CanceledError } from "axios";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);


  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);
  
  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter(u => u.id !== user.id));

    axios.delete("https://jsonplaceholder.typicode.com/users/" + user.id )
      .catch( err => {
        setError(err.message);
        setUsers(originalUsers);
      })
  }

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "David Shaibu"};
    setUsers([newUser, ...users]);

    axios.post("https://jsonplaceholder.typicode.com/users/", newUser)
      .then(({data: savedUser}) => setUsers([savedUser, ...users]))
      .catch(err => {
        setError(err.message);
        setUsers(originalUsers);
      });
  }

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = {...user, name: user.name + "!"};
    setUsers(users.map(u => u.id === user.id ? updatedUser : u))

    axios.patch("https://jsonplaceholder.typicode.com/users/" + user.id, updatedUser)
      .then((res) => setUsers(users.map(u => u.id === user.id ? res.data : u)))
      .catch(err => {
        setError(err.message);
        setUsers(originalUsers)
      }); 
  };


  return (
    <>
      {error && <p className="text-danger"> {error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button onClick={addUser} className="btn btn-primary mb-3">Add</button>
      <ul className="list-group">
        {users.map((user) => (
          <li key={user.id} className="list-group-item d-flex justify-content-between">
            {user.name}
          <div>
            <button onClick={() => updateUser(user)} className="btn btn-outline-secondary mx-1">Update</button>
            <button onClick={() => deleteUser(user)} className="btn btn-outline-danger">Delete</button>
          </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
