import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const AccessSelection = () => {
    const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h2 className="font-bold text-[#000000ad] text-2xl text-center mb-6 ">
        Choose Access:
      </h2>
      <Button
        className="bg-[#1616d3ad]! text-white! font-bold!
                  active:scale-95"
        onClick={()=> navigate("/app/user/ownerlogin")}
      >
        Owner
      </Button>
      <Button
        className="bg-[#1616d3ad]! text-white! font-bold!
                  active:scale-95"
      >
        Staff
      </Button>
    </div>
  );
};
export default AccessSelection;
