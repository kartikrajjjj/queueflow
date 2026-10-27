import {
  Button,
  Form,
  Input,
  InputNumber,
  Card,
  Table,
  Popconfirm,
  message,
} from "antd";
import { toast } from "react-toastify";
import http from "../../utils/http";
import { useEffect, useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";

const Services = () => {
  const [services, setServices] = useState([]);
  const [fetchingServices, setFetchingServices] = useState(false);

  const [form] = Form.useForm();

  const [loading, setLoading] = useState(false);

  const handleAddService = async (values) => {
    try {
      setLoading(true);

      const { data } = await http.post("/api/owner/add", {
        serviceName: values.serviceName.trim(),
        duration: values.duration,
      });
      toast.success(data.message || "Service added successfully");
      form.resetFields();
      await fetchServices();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to add service");
    } finally {
      setLoading(false);
    }
  };

  const fetchServices = async () => {
    try {
      setFetchingServices(true);

      const { data } = await http.get("/api/owner/services");

      setServices(data.services);
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to fetch services");
    } finally {
      setFetchingServices(false);
    }
  };

  const handleDeleteService = async (serviceId) => {
    try {
      await http.delete(`/api/owner/services/${serviceId}`);

      message.success("Service deleted successfully");

      await fetchServices();
    } catch (err) {
      message.error(err.response?.data?.message || "Failed to delete service");
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-slate-800 tracking-tight mb-2">
        Services
      </h1>

      <p className="text-gray-500 mb-6">
        Manage the services your business offers.
      </p>

      <Card title="Add a New Service" className="max-w-xl">
        <Form form={form} layout="vertical" onFinish={handleAddService}>
          <Form.Item
            label="Service Name"
            name="serviceName"
            rules={[
              {
                required: true,
                whitespace: true,
                message: "Please enter a service name",
              },
            ]}
          >
            <Input placeholder="e.g. Haircut" />
          </Form.Item>

          <Form.Item
            label="Estimated Duration (minutes)"
            name="duration"
            rules={[
              {
                required: true,
                message: "Please enter the duration",
              },
              {
                type: "number",
                min: 1,
                message: "Duration must be at least 1 minute",
              },
            ]}
          >
            <InputNumber className="w-full" placeholder="e.g. 20" min={1} />
          </Form.Item>

          <Button
            className="bg-[#1616d3ad]! text-white! font-bold! active:scale-95"
            type="primary"
            htmlType="submit"
            loading={loading}
          >
            Add Service
          </Button>
        </Form>
      </Card>
      <Card title="Available Services" className="mt-6">
        <Table
          rowKey={(record) => record._id}
          loading={fetchingServices}
          dataSource={services}
          pagination={false}
          locale={{
            emptyText: "No services added yet",
          }}
          columns={[
            {
              title: "Service Name",
              dataIndex: "serviceName",
              key: "serviceName",
            },
            {
              title: "Duration",
              dataIndex: "duration",
              key: "duration",
              render: (duration) => `${duration} minutes`,
            },
            {
              title: "Action",
              key: "action",
              render: (_, record) => (
                <Popconfirm
                  title="Delete this service?"
                  description={`Are you sure you want to delete "${record.serviceName}"?`}
                  onConfirm={() => handleDeleteService(record._id)}
                  okText="Delete"
                  cancelText="Cancel"
                  okButtonProps={{ danger: true }}
                >
                  <Button danger type="primary" icon={<DeleteOutlined />}>
                    Delete
                  </Button>
                </Popconfirm>
              ),
            },
          ]}
        />
      </Card>
    </div>
  );
};
export default Services;
