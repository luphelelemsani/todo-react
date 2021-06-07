import React from "react";
import Todo from "./Todo";

const TodoList = ({ className, id, todos, setTodos }) => {
  const drop = (e) => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData("card_id");

    const card = document.getElementById(card_id);
    card.style.display = "block";

    e.target.appendChild(card);
  };
  const dragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div id={id} className={className} onDrop={drop} onDragOver={dragOver}>
      <h2 style={{ marginBottom: "15px", color: "red" }}>Incompleted</h2>
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo
            todos={todos}
            todo={todo}
            setTodos={setTodos}
            text={todo.text}
            key={todo.id}
            id="todo-1"
            className="todo-1"
            draggable="true"
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
