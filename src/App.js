import "./App.css";

import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Completed from "./components/Completed";

import { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <Form
            inputText={inputText}
            todos={todos}
            setTodos={setTodos}
            setInputText={setInputText}
          />
        </header>
        <main className="flexbox">
          <TodoList
            setTodos={setTodos}
            todos={todos}
            id="todoList-1"
            className="todoList"
          />
          <Completed id="todoList-2" className="todoList" />
        </main>
      </div>
    </div>
  );
}

export default App;
