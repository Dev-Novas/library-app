import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Button from "./components/Button";
import Landing from "./pages/Landing";
import Books from "./pages/Books";
import SingleBook from "./pages/SingleBook";
import AddBook from "./pages/AddBook";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Books" element={<Books />} />
        <Route path="/SingleBook" element={<SingleBook />} />
        {/* <Route path="/SingleBook: id" element={<SingleBook />} /> */}
        <Route path="/AddBook" element={<AddBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
