import React from "react";

const Form = ({ setInputText, todos, setTodos, inputText }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.random() * 1000,
      },
    ]);
    setInputText("");
  };
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  return (
    <div>
      <form className="form-control">
        <h1 style={{ fontSize: "3em" }}>Todo App</h1>
        <div className="input-form">
          <input
            value={inputText}
            onChange={inputTextHandler}
            type="text"
            name="todo"
            className="input"
          />
          <button
            onClick={submitHandler}
            type="submit"
            value="submit"
            className="submit-btn btn"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
