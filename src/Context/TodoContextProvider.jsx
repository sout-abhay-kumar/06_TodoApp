import TodoContext from "./TodoContext";
import { useEffect, useState } from "react";

const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

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
      isEditing: false,
    };

    setTodos([newTodos, ...todos]);
    setText("");
  };

  const deleteTodo = (id) => {
    const newTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newTodo);
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: true } : todo
      )
    );
  };

  const updateTodoText = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  const saveEdit = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText, isEditing: false } : todo
      )
    );
  };

  return (
    <TodoContext.Provider
      value={{
        setText,
        setTodos,
        todos,
        handleAdd,
        text,
        deleteTodo,
        toggleTodo,
        editTodo,
        saveEdit, 
        updateTodoText
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
