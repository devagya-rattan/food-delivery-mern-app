import "./App.css";
import Home from "./Screens/Home";
import Login from "./Screens/Login";
import { Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Signup from "./Screens/Signup";
function App() {
  return (
    <>
        {/* <BrowserRouter> */}
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/createuser" element={<Signup />} />
              <Route exact path="/login" element={<Login />} />
            </Routes>
        {/* </BrowserRouter> */}

    </>
  );
}

export default App;
