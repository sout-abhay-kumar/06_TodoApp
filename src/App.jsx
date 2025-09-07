import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <Router>
        <nav className="text-white px-6 py-4 bg-indigo-200">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold">Just ToDo</div>

            <div className="space-x-6">
              <Link to="/" className="hover:text-cyan-950">
                Home
              </Link>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App