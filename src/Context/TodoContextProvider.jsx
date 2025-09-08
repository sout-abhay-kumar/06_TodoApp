import TodoContext from "./TodoContext";
import { useEffect, useState } from "react";

const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
    
    const [done, setDone] = useState(false);

    const toggleDone = () => {
        setDone(!done);
    }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("done", JSON.stringify(done));
  }, [todos, done]);

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

    setTodos([newTodos, ...todos]);
    setText("");
    };
    
    const deleteTodo = (id) => {
        const newTodo = todos.filter((todo) => todo.id !== id);
        setTodos(newTodo);
    }

  return (
    <TodoContext.Provider
      value={{ setText, setTodos, todos, handleAdd, text, deleteTodo, done, setDone, toggleDone }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
