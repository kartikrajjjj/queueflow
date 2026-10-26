import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import http from "../../../utils/http";
import Loader from "../../Shared/Loader";

const OwnerGuard = ({ children }) => {
  const [authorised, setAuthorised] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyOwner = async () => {
      try {
        await http.get("/api/owner/verify-session");
        setAuthorised(true);
      } catch (err) {
        setAuthorised(false);
      } finally {
        setLoading(false);
      }
    };

    verifyOwner();
  }, []);

  if (loading) return <Loader />;

  if (!authorised) {
    return <Navigate to="/app/user/ownerlogin" replace />;
  }

  return children;
};

export default OwnerGuard;