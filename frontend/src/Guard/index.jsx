import { useState, useEffect } from "react";
import http from "../utils/http";
import { Navigate, Outlet } from "react-router-dom";
import Loader from "../components/Shared/Loader";

const Guard = ({ endpoint, role, children }) => {
  const [authorised, setAuthorised] = useState(false);
  const [loader, setLoader] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const { data } = await http.get(endpoint);
        sessionStorage.setItem("userInfo", JSON.stringify(data));
        const userRole = data.user?.role;

        setUser(userRole);
        setLoader(false);
        setAuthorised(userRole === role);
      } catch (err) {
        setUser(null);
        setLoader(false);
        setAuthorised(false);
      }
    };
    verifyToken();
  }, [endpoint]);

  if (loader) return <Loader />;

  if (authorised) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};
export default Guard;
