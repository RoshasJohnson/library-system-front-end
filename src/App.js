import logo from "./logo.svg";
import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import Books from "./pages/Books";
import Author from "./pages/Author";
import Genre from "./pages/Genre";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import Booksadmin from "./components/admin/Booksadmin";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          {/* Student pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/books" element={<Booksadmin />} />
          <Route path="/admin/author" element={<Author />} />
          <Route path="/admin/genre" element={<Genre />} />

         {/* ====================================================== */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
