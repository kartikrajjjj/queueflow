import { Spin } from "antd"

const Loader = () =>{
    return(
        <div className="flex text-white! h-screen items-center justify-center bg-black">
            <Spin description="loading" size="large"/>
        </div>
    )
}
export default Loader;