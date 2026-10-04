import { Button, Card, Form, Input } from "antd";
import { LockOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Home from "../layout/Home.jsx";
import { useState } from "react";
import { toast } from "react-toastify";
import http from "../utils/http"; 


const { Item } = Form;
const Signup = () => {

  const[signupForm] = Form.useForm();
  

  const [formData, setFormData] = useState(null);
  const [otp, setOtp] = useState(null);
  const [loading, setLoading] = useState(false);
  const onFinish = async (values) => {
    try {
        console.log("Entered Signup");
      setLoading(true);
      const { data } = await http.post("/api/auth/send-mail", values);
      setOtp(data.otp);
      setFormData(values);
    } catch (err) {
      toast.error(err.response ? err.response.data.message : err.message);
      setOtp(null);
      setFormData(null);
    } finally {
      setLoading(false);
    }
  };

  const onSignup = async (values) => {
    try {
        console.log("Entered onSignup");
      if(Number(values.otp)!=Number(otp))
        return toast.error("Invalid OTP");
      setLoading(true);
      await http.post("/api/auth/signup", formData);
      toast.success("Signup successful");
      setOtp(null);
      setFormData(null);
      signupForm.resetFields();
    } catch (err) {
      toast.error(err.response ? err.response.data.message : err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Home>
      <div className="flex">
        <div className="w-1/2 hidden md:flex items-center justify-center">
          <img
            src="img1-expense-tracker.jpg"
            alt="Bank"
            className="w-4/5 object-contain "
          />
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center p-2 md:p-6 bg-white">
          <Card className="border border-black! w-full max-w-sm shadow-md">
            <h2 className="font-bold text-[#1616d3ad] text-2xl text-center mb-6 ">
              Digital Queue
            </h2>
            {otp ? (
              <Form name="otp-form"
               layout="vertical"
               onFinish={onSignup}
               >
                <Item
                  name="otp"
                  label="OTP:"
                  rules={[{ required: true }]}
                >
                  <Input.OTP
                    prefix={<UserOutlined />}
                    placeholder="Enter your full name"
                  />
                </Item>
                <Item>
                  <Button
                    loading={loading}
                    type="text"
                    htmlType="submit"
                    block
                    className="bg-[#1616d3ad]! text-white! font-bold!
                  active:scale-95"
                  >
                    Verify now
                  </Button>
                </Item>
              </Form>
            ) : (
              <Form name="signup-form"
               layout="vertical"
               onFinish={onFinish}
               form={signupForm}
               >
                <Item
                  name="fullname"
                  label="Full Name:"
                  rules={[{ required: true }]}
                >
                  <Input
                    prefix={<UserOutlined />}
                    placeholder="Enter your full name"
                  />
                </Item>
                <Item
                  name="mobile"
                  label="Mobile: "
                  rules={[{ required: true }]}
                >
                  <Input
                    prefix={<PhoneOutlined />}
                    placeholder="Enter your mobile no."
                  />
                </Item>

                <Item name="email" label="Email:" rules={[{ required: true }]}>
                  <Input
                    prefix={<UserOutlined />}
                    placeholder="Enter your username"
                  />
                </Item>
                <Item
                  name="password"
                  label="Password:"
                  rules={[{ required: true }]}
                >
                  <Input.Password
                    prefix={<LockOutlined />}
                    placeholder="Enter your password"
                  />
                </Item>
                <Item>
                  <Button
                    loading={loading}
                    type="text"
                    htmlType="submit"
                    block
                    className="bg-[#1616d3ad]! text-white! font-bold!
                  active:scale-95"
                  >
                    Signup
                  </Button>
                </Item>
              </Form>
            )}
            <div className="flex items-center justify-between">
              <div></div>
              <Link
                style={{ textDecoration: "underline" }}
                to="/"
                className="text-[#1616d3ad]! font-bold!"
              >
                Already have an account
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </Home>
  );
};
export default Signup;
