import "../App.css";
import DeleteIcon from "../icons8-delete-30.png";
import EditIcon from "../icons8-edit-30.png";

function Home() {
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
            className="w-170 h-10 outline-blue-700 rounded-2xl px-3 my-30 shadow-2xl/50"
            placeholder="Just ToDo's"
            type="text"
          />
          <button className="h-10 w-20 bg-indigo-200 my-30 rounded-3xl mx-3 shadow-2xl/50 active:shadow-none cursor-pointer inset-shadow-indigo-500/50 font-bold font-mono">
            Add
          </button>
        </div>
        <div className="flex justify-center shadow-2xl bg-blue-50 ">
          <div className="align-center w-200 h-10 bg-blue-200 rounded-2xl pb-12">
            <input
              type="checkbox"
              className="w-4 h-4 text-green-600 focus:ring-2 focus:ring-green-400 mx-2"
            />
            <input
              className="w-170 h-10 py-3 font-black text-xl font-sans"
              type="text"
            />
            <button class="p-2 rounded-full ml-auto hover:bg-gray-200">
              <img src={DeleteIcon} alt="Delete" className="w-6 h-6 " />
            </button>
            <button class="p-2 rounded-full ml-auto hover:bg-gray-200">
              <img src={EditIcon} alt="Edit" className="w-6 h-6" />
            </button>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
