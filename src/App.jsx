import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CreateUserPage } from "./pages/CreateUserPage";
import { UsersPage } from "./pages/UsersPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="/create" element={<CreateUserPage />} />
      </Routes>
    </Router>
  );
}

export default App;
