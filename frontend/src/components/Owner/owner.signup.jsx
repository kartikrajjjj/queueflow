import { Button, Card, Form, Input } from "antd";
import { LockOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Home from "../../layout/Home";
import { useState } from "react";
import { toast } from "react-toastify";
import http from "../../utils/http";

const { Item } = Form;

const OwnerSignup = ({ onRegistered }) => {
  const [signupForm] = Form.useForm();

  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    try {
      console.log("Entered Signup");
      setLoading(true);

      const { data } = await http.post("/api/owner/create", values);
      toast.success("Business registered successfully");
      setFormData(values);
      onRegistered();
      
    } catch (err) {
      toast.error(err.response ? err.response.data.message : err.message);
      setFormData(null);
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
            className="w-4/5 object-contain"
          />
        </div>

        <div className="w-full md:w-1/2">
          <Card>
            <Form
              name="signup-form"
              layout="vertical"
              onFinish={onFinish}
              form={signupForm}
            >
              <Item
                name="businessname"
                label="Business Name:"
                rules={[{ required: true }]}
              >
                <Input
                  prefix={<UserOutlined />}
                  placeholder="Enter your business name"
                />
              </Item>

              <Item
                name="ownerpassword"
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
                  className="bg-[#1616d3ad]! text-white! font-bold! active:scale-95"
                >
                  Register
                </Button>
              </Item>
            </Form>

            <div className="flex items-center justify-between">
              <div></div>
            </div>
          </Card>
        </div>
      </div>
    </Home>
  );
};

export default OwnerSignup;