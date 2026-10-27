import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Guard from "./Guard/index.jsx";
import Userlayout from "./components/Userlayout/index.jsx";

import OwnerSignup from "./components/Owner/owner.signup.jsx";
import OwnerLogin from "./components/Owner/owner.login.jsx";
import Ownerpage from "./components/Owner/owner.page.jsx";
import OwnerGuard from "./components/Owner/OwnerGuard/index.jsx";
import Ownerlayout from "./components/Owner/OwnerLayout/index.jsx";
import OwnerDashboard from "./components/Owner/owner.dashboard.jsx";

import AccessSelection from "./components/AccessSelection/AccessSelection.jsx";
import Signup from "./components/Signup.jsx";
import HomePage from "./components/HomePage.jsx";
import ForgotPassword from "./components/forgotPassword.jsx";
import Services from "./components/Owner/services.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/ownersignup" element={<OwnerSignup />} />

        {/* Normal user area */}
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

        {/* Protected owner dashboard */}
        <Route
          path="/app/owner"
          element={
            <OwnerGuard>
              <Ownerlayout />
            </OwnerGuard>
          }
        >
          <Route index element={<OwnerDashboard />} />

          <Route
            path="services"
            element={<Services />}
          />

          <Route
            path="staff"
            element={<div>Staff page (in progress)</div>}
          />

          <Route
            path="stats"
            element={<div>Statistics page (in progress)</div>}
          />

          <Route
            path="settings"
            element={<div>Settings page (in progress)</div>}
          />
        </Route>
      </Routes>

      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;