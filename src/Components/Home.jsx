import { useContext } from "react";
import "../App.css";
import DeleteIcon from "../icons8-delete-30.png";
import EditIcon from "../icons8-edit-30.png";
import TodoContext from "../Context/TodoContext";

function Home() {
  const { text, setText, handleAdd, todos, deleteTodo, toggleTodo, editTodo, saveEdit, updateTodoText } =
    useContext(TodoContext);
  return (
    <>
      <div>
        <div>
          <h1 className="text-center my-5 font-extrabold text-4xl text">
            Manage Your ToDo's
          </h1>
        </div>
        <div className="flex justify-center">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-170 h-10 outline-blue-700 rounded-2xl px-3 my-30 shadow-2xl/50"
            placeholder="Just ToDo's"
            type="text"
          />
          <button
            onClick={handleAdd}
            className="h-10 w-20 bg-indigo-200 my-30 rounded-3xl mx-3 shadow-2xl/50 active:shadow-none cursor-pointer inset-shadow-indigo-500/50 font-bold font-mono"
          >
            Add
          </button>
        </div>

        <div className="flex flex-col items-center rounded-4xl shadow-2xl bg-blue-50 ">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="align-center my-6 w-200 h-10 bg-blue-200 rounded-2xl pb-12"
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => {
                  toggleTodo(todo.id);
                }}
                className="w-4 h-4 text-green-600 focus:ring-2 focus:ring-green-400 mx-2"
              />
              <input
                className={
                  "w-170 h-10 py-3 " +
                  (todo.completed
                    ? "line-through font-black text-xl font-mono"
                    : "font-black text-xl font-sans")
                }
                value={todo.text}
                onChange={(e) => updateTodoText(todo.id, e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") saveEdit(todo.id);
                }}
                readOnly={!todo.isEditing}
                type="text"
              />
              <button
                onClick={() => deleteTodo(todo.id)}
                className="p-2 rounded-full ml-auto cursor-pointer"
              >
                <img src={DeleteIcon} alt="Delete" className="w-6 h-6 " />
              </button>
              <button
                onClick={() => editTodo(todo.id)}
                className="p-2 rounded-full ml-auto cursor-pointer"
              >
                <img src={EditIcon} alt="Edit" className="w-6 h-6" />
              </button>
              <div></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
