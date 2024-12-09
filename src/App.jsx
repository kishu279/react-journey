import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTodo = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos");

      // Set the first 10 todos
      setTodos(res.data.slice(0, 4));
      setLoading(false); // Stop loading once the data is fetched
    } catch (error) {
      setError(error.message);
      setLoading(false); // Stop loading even if there's an error
    }
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>ToDo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
