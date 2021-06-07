import React from "react";

const Todo = ({ id, draggable, text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const dragStart = (e) => {
    const target = e.target;

    e.dataTransfer.setData("card_id", target.id);

    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };
  const dragOver = (e) => {
    e.stopPropagation();
  };
  const editTodo = () => {
    const newTodo = prompt("Lets  make some changes");
    console.log(newTodo);
    setTodos();
  };
  return (
    <div
      className="todo"
      id={id}
      draggable={draggable}
      onDragStart={dragStart}
      onDragOver={dragOver}
    >
      <p className="todo-item">{text}</p>
      <button className="edit btn" onClick={editTodo}>
        Edit
      </button>
      <button className="delete btn" onClick={deleteHandler}>
        Delete
      </button>
    </div>
  );
};

export default Todo;
