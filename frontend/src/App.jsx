import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Guard from "./Guard/index.jsx";
import Userlayout from "./components/Userlayout/index.jsx";
import Dashboard from "./components/Dashboard.jsx";


import Signup from "./components/Signup.jsx";
import HomePage from "./components/HomePage.jsx";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element ={<Signup />} />

        <Route
          path="/app/user"
          element={
            <Guard endpoint="/api/auth/test" role="owner">
              <Userlayout />
            </Guard>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          {/*commented coz elements are not yet built <Route index element={<Type />} /> */}
          {/* <Route path="owner" element={<Owner />} />
          <Route path="staff" element={<Staff />} /> */}
        </Route>
    </Routes>
    <ToastContainer />
    </BrowserRouter>
    
  )
}
export default App
