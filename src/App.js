import Table from "./components/data/list";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Protected from "./components/Protected";
import "./App.css";
// import { useContext } from "react";

// import { AuthContext } from "./context/AuthContext";

function App() {
  // const { currentUser } = useContext(AuthContext);

  // const RequireAuth = ({ children }) => {
  //   return currentUser ? children : <Navigate to="/login" />;
  // };
  return (
    <div>
      <div className="body">
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Table />} />
              <Route path="login" element={<Login />} />

              <Route
                path="admin"
                element={<Protected Component={List} />}
              ></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
