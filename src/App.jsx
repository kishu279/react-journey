// import axios from "axios";
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

// import { useCallback, useState } from "react";
// import Todos from "./../components/Todos.jsx";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [todos, setTodos] = useState([]);

//   const increment = () => {
//     setCount((c) => c + 1);
//   };
//   // const addTodo = () => {
//   //   setTodos((t) => [...t, "New Todo"]);
//   // };

//   const addTodo = useCallback(() => {
//     setTodos([...todos, "new todo"]);
//   }, [todos]);

//   return (
//     <>
//       <Todos todos={todos} addTodo={addTodo} />
//       <hr />
//       <div>
//         Count: {count}
//         <button onClick={increment}>+</button>
//       </div>
//     </>
//   );
// };

// export default App;

// import useFetch from "./custom hooks/useFetch";

// const App = () => {
//   const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

//   return <>{data && data.map((item) => <p key={item.id}>{item.title}</p>)}</>;
// };

// export default App;

// import { useEffect, useRef, useState } from "react";
// import useFetch from "./custom hooks/useFetch";

// const App = () => {
//   const [url, setUrl] = useState("");
//   const inputText = useRef();

//   function handleInput() {
//     setUrl(inputText.current.value);
//   }

//   const { data, loading, error } = useFetch(url);

//   return (
//     <>
//       <div>
//         <input
//           ref={inputText}
//           type="url"
//           placeholder="URL"
//           onChange={handleInput}
//         />

//         {loading && <p>Loading...</p>}
//         {error && <p>{error}</p>}
//         {data && data.map((item) => <ul key={item.id}>{item.title}</ul>)}
//       </div>
//     </>
//   );
// };

// export default App;

// import { useEffect, useRef, useState } from "react";
// import useDebounce from "./custom hooks/useDebounce";

// export default function App() {
//   const [data, setData] = useState("");
//   const inputText = useRef();
//   const [input, setInput] = useState(null);

//   function handleInput() {
//     setInput(inputText.current.value);
//   }

//   //   useEffect(() => {
//   //     // const getData = setTimeout(() => {
//   //     //   setData(input);
//   //     // }, 2000);

//   //     // return () => clearTimeout(getData);
//   //   }, [input]);

//   useDebounce(
//     () => {
//       setData(input);
//     },
//     2000,
//     input
//   );

//   return (
//     <>
//       <div>
//         <input
//           ref={inputText}
//           type="text"
//           placeholder="enter..."
//           onChange={handleInput}
//         />
//         <p>{data}</p>
//       </div>
//     </>
//   );
// }
// import { useState } from "react";
// import usePrev from "./custom hooks/usePrev";

// const App = () => {
//   const [input, setInput] = useState(""); // Initialize input with an empty string
//   const [data, setData] = useState(null);

//   const prevData = usePrev(data); // Get previous value of `data`

//   return (
//     <>
//       <div>
//         <input
//           type="text"
//           value={input} // Bind input to the state
//           onChange={(e) => setInput(e.target.value)} // Update state on change
//           placeholder="Enter..."
//         />
//         <button
//           onClick={() => {
//             setData(input); // Set data to the current input value when the button is clicked
//           }}
//         >
//           +
//         </button>
//       </div>

//       <div>
//         <p>Current Data: {data}</p>
//         <p>Previous Data: {prevData}</p>
//       </div>
//     </>
//   );
// };

// export default App;

// export default function App() {
//   const [input, setInput] = useState("");
//   const [data, setData] = useState("");
//   useDebounce(
//     () => {
//       setData(input);
//     },
//     2000,
//     input
//   );

//   return (
//     <>
//       <div>
//         <input
//           type="text"
//           placeholder="search"
//           onChange={(e) => setInput(e.target.value)}
//         />
//         <p>Input: {input}</p>

//         <p>Data : {data} </p>
//       </div>
//     </>
//   );
// }

// import { useRef } from "react";

// function App() {
//   function sendDataToBackend() {
//     fetch("api.amazon.com/search/");
//   }

//   const debouncedfn = useDebounce(sendDataToBackend);

//   return (
//     <div>
//       <input type="search" onChange={debouncedfn} />
//     </div>
//   );
// }

// //steps :
// // 1. create a function which accepts the original function
// // 2. create a clock --> using useRef
// // 3. write a function to clear the clock --> clearTimeOut and call the function using setTimeOut --> this will be the value of ref current
// // 4. return the function

// function useDebounce(originalFn) {
//   const currentClock = useRef();
//   const fn = () => {
//     clearTimeout(currentClock.current);
//     currentClock.current = setTimeout(originalFn, 1000);
//   };
//   return fn;
// }

// export default App;

// Context Api Explanation

// export default function () {
//   return (
//     <>
//       <div>
//         <LightBulb />
//       </div>
//     </>
//   );
// }

// function LightBulb() {
//   const [bulbOn, setBulbOn] = useState(true);

//   return (
//     <>
//       <BulbState bulbOn={bulbOn} />
//       <Toggle setBulbOn={setBulbOn} bulbOn={bulbOn} />
//     </>
//   );
// }

// function BulbState({ bulbOn }) {
//   return <>{bulbOn ? "Bulb On" : "Bulb Off"}</>;
// }

// function Toggle({ setBulbOn, bulbOn }) {
//   return (
//     <>
//       <button onClick={() => setBulbOn(!bulbOn)}>Toggle</button>
//     </>
//   );
// }

// import { useContext } from "react";

// const MyContext = createContext();

// export default function () {
//   const [bulbOn, setBulbOn] = useState(true);

//   return (
//     <>
//       <div>
//         <MyContext.Provider value={{ bulbOn: bulbOn, setBulbOn: setBulbOn }}>
//           <LightBulb />
//         </MyContext.Provider>
//       </div>
//     </>
//   );
// }

// function LightBulb() {
//   return (
//     <>
//       <BulbState />
//       <Toggle />
//     </>
//   );
// }

// function BulbState() {
//   const { bulbOn } = useContext(MyContext);
//   return <>{bulbOn ? "Bulb On" : "Bulb Off"}</>;
// }

// function Toggle() {
//   const { bulbOn, setBulbOn } = useContext(MyContext);
//   return (
//     <>
//       <button onClick={() => setBulbOn(!bulbOn)}>Toggle</button>
//     </>
//   );
// }

// import { useState, useContext, createContext } from "react";

// const MyContext = createContext();

// function Wrap({ children }) {
//   const [bulbOn, setBulbOn] = useState(true);
//   return (
//     <MyContext.Provider value={{ bulbOn: bulbOn, setBulbOn: setBulbOn }}>
//       {children}
//     </MyContext.Provider>
//   );
// }

// function App() {
//   return (
//     <>
//       <div>
//         <Wrap>
//           <LightBulb />
//         </Wrap>
//       </div>
//     </>
//   );
// }

// function LightBulb() {
//   return (
//     <>
//       <BulbState />
//       <Toggle />
//     </>
//   );
// }

// function BulbState() {
//   const { bulbOn } = useContext(MyContext);
//   return <>{bulbOn ? "Bulb On" : "Bulb Off"}</>;
// }

// function Toggle() {
//   const { bulbOn, setBulbOn } = useContext(MyContext);
//   return (
//     <>
//       <button onClick={() => setBulbOn(!bulbOn)}>Toggle</button>
//     </>
//   );
// }

// export default App;

// Recoil --> State Management

import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { jobsAtom, networkAtom, notificationAtom } from "./Atoms.jsx";
import { Count } from "./Selectors.jsx";

function App() {
  return (
    <>
      <RecoilRoot>
        <MyApp />
      </RecoilRoot>
    </>
  );
}

const MyApp = () => {
  // const myNetworkAtom = useRecoilValue(networkAtom);
  // const myNotificationAtom = useRecoilValue(notificationAtom);
  // const myJobsAtom = useRecoilValue(jobsAtom);

  const [netAtom, setNetAtom] = useRecoilState(networkAtom);
  const [notiAtom, setNotiAtom] = useRecoilState(notificationAtom);
  const [jobAtom, setJobAtom] = useRecoilState(jobsAtom);
  const c = useRecoilValue(Count);

  const updateCount = () => {
    setNetAtom(c);
  };

  return (
    <>
      <div>
        <button>Home</button>
        <button>Video</button>
        <button>My Network({netAtom})</button>
        <button>Notification({notiAtom})</button>
        <button>Jobs({jobAtom})</button>
      </div>

      <div>
        <button onClick={updateCount}>Button</button>
      </div>
    </>
  );
};

export default App;
