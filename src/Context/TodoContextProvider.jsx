import TodoContext from "./TodoContext";
import { useEffect, useState } from "react";

const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() === "") {
      return;
    }

      let updatedText = text;
    const sentence = text.trim();
    const firstWord = sentence.split(" ")[0];
    const firstLetter = firstWord[0];
    if (firstLetter === firstLetter.toLowerCase()) {
      updatedText = firstLetter.toUpperCase() + sentence.slice(1);
    }

    const newTodos = {
      id: Date.now(),
      text: updatedText,
      completed: false,
    };

    setTodos([...todos, newTodos]);
    setText("");
  };

  return (
    <TodoContext.Provider value={{ setText, setTodos, todos, handleAdd, text }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
