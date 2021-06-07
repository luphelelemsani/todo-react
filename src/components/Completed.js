import React from "react";

const Completed = ({ className, id }) => {
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
      <h2 style={{ marginBottom: "15px", color: "green" }}>Completed</h2>
      <ul className="todo-list"></ul>
    </div>
  );
};

export default Completed;
