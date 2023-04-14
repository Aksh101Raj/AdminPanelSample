import Table from "./components/data/list";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <div className="body">
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Table />} />
              <Route path="login" element={<Login />} />
              <Route path="admin">
                <Route index element={<List />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
