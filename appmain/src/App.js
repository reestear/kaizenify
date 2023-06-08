import Register from "./components/Register";
import LogIn from "./components/LogIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" Component={LogIn}></Route>
        <Route path="/register" Component={Register}></Route>
        <Route path="/WeekBan" Component={Main}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
