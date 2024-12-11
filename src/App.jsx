// import axios from "axios";
// import { useEffect, useState } from "react";

// import { useEffect, useState } from "react";

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchTodo = async () => {
//     try {
//       const res = await axios.get("https://jsonplaceholder.typicode.com/todos");

//       // Set the first 10 todos
//       setTodos(res.data.slice(0, 4));
//       setLoading(false); // Stop loading once the data is fetched
//     } catch (error) {
//       setError(error.message);
//       setLoading(false); // Stop loading even if there's an error
//     }
//   };

//   useEffect(() => {
//     fetchTodo();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div>
//       <h1>ToDo List</h1>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>{todo.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

// import axios from "axios";
// import { useState, useEffect } from "react";

// function MyButton({ value, onButtonClick }) {
//   return (
//     <button className="border p-3 bg-slate-300" onClick={onButtonClick}>
//       {value}
//     </button>
//   );
// }

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [update, setUpdate] = useState([]);

//   async function fetchTodo() {
//     try {
//       const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
//       setTodos(res.data.slice(0, 10));
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   function handleClick(value) {
//     try {
//       setUpdate([...update, todos[value]]);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   useEffect(() => {
//     fetchTodo();
//   }, []);

//   return (
//     <>
//       <div>
//         <h1>Todo List</h1>
//       </div>

//       <div className="display flex space-x-5">
//         <ul>
//           {todos.map((todo, index) => (
//             <MyButton
//               key={index}
//               value={`todo ${index}`}
//               onButtonClick={() => {
//                 handleClick(index);
//               }}
//             />
//           ))}
//         </ul>
//       </div>

//       <div>
//         <ul>
//           {update.map((todo, index) => (
//             <li key={index}>{todo.title}</li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// }

// export default App;

// import React, { useState, useContext, useRef, useEffect } from "react";

// function Parent() {
//   const [inputValue, setInputValue] = useState("");
//   const count = useRef(0);

//   useEffect(() => {
//     count.current = count.current + 1;
//   }, [inputValue]);

//   return (
//     <>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <h1>Render: {count.current}</h1>
//     </>
//   );
// }

// export default Parent;

// import { useRef } from "react";

// function MyBttn({ value, focuspoint }) {
//   return <button onClick={focuspoint}>{value}</button>;
// }

// function App() {
//   const inputElement = useRef();

//   function focuspoint() {
//     inputElement.current.focus();
//   }
//   return (
//     <>
//       <div className="display flex justify-center">
//         <input className="border" type="text" ref={inputElement} />
//         <MyBttn value={"Focus"} focuspoint={focuspoint}></MyBttn>
//       </div>
//     </>
//   );
// }

// export default App;

// import useFetch from "./custom hooks/useFetch";

// const App = () => {
//   const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

//   return <>{data && data.map((item) => <p key={item.id}>{item.title}</p>)}</>;
// };

// export default App;

import { useCallback, useState } from "react";
import Todos from "./../components/Todos.jsx";

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  // const addTodo = () => {
  //   setTodos((t) => [...t, "New Todo"]);
  // };

  const addTodo = useCallback(() => {
    setTodos([...todos, "new todo"]);
  }, [todos]);

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

export default App;
