import { useEffect, useState } from "react";
import http from "../../utils/http";
import OwnerSignup from "./owner.signup";
import OwnerDashboard from "./owner.dashboard";
import { useNavigate } from "react-router-dom";

const Ownerpage = ({ onRegistered }) => {
  const navigate = useNavigate();
  const [registered, setRegistered] = useState(null);
  useEffect(() => {
    const checkOwner = async () => {
      try {
        const { data } = await http.get("/api/owner/status");
        setRegistered(data.registered);
      } catch (err) {
        if (err.response?.status === 401) {
          navigate("/app/user/ownerlogin");
          return;
        }

        console.log(err);
      }
    };
    checkOwner();
  }, []);

  if (registered === null) {
    return <div>Loading...</div>;
  }
  if (registered === false) {
    return (
      <OwnerSignup
        onRegistered={() => {
          console.log("CALLBACK RECEIVED");
          setRegistered(true);
        }}
      />
    );
  }

  console.log("REGISTERED STATE:", registered);

  return <OwnerDashboard />;
};
export default Ownerpage;
