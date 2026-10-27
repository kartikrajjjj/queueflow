import { useEffect, useState } from "react";
import http from "../../utils/http";
import OwnerSignup from "./owner.signup";
import OwnerLogin from "./owner.login";

const Ownerpage = () => {
  const [registered, setRegistered] = useState(null);

  useEffect(() => {
    const checkOwner = async () => {
      try {
        const { data } = await http.get("/api/owner/status");
        setRegistered(data.registered);
      } catch (err) {
        console.error("Failed to check business registration:", err);
      }
    };

    checkOwner();
  }, []);

  if (registered === null) {
    return <div>Checking business registration...</div>;
  }

  if (registered === false) {
    return <OwnerSignup onRegistered={() => setRegistered(true)} />;
  }

  return <OwnerLogin />;
};

export default Ownerpage;