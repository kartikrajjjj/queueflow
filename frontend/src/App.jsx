import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Guard from "./Guard/index.jsx";
import Userlayout from "./components/Userlayout/index.jsx";
import OwnerSignup from "./components/Owner/owner.signup.jsx";
import OwnerLogin from "./components/Owner/owner.login.jsx";
import Ownerpage from "./components/Owner/owner.page.jsx";
import AccessSelection from "./components/AccessSelection/AccessSelection.jsx";

import Signup from "./components/Signup.jsx";
import HomePage from "./components/HomePage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/ownersignup" element={<OwnerSignup />} />
        

        <Route
          path="/app/user"
          element={
            <Guard endpoint="/api/auth/test" role="owner">
              <Userlayout />
            </Guard>
          }
        >

          <Route path="access" element={<AccessSelection />} />  
          <Route path="ownerlogin" element={<OwnerLogin />} />        
          <Route path="owner" element={<Ownerpage />} />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}
export default App;
