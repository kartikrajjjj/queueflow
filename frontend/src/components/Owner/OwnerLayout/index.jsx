import {
  AppstoreOutlined,
  TeamOutlined,
  BarChartOutlined,
  LogoutOutlined,
  MenuOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Button, Image, Layout, Menu, theme } from "antd";
import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import http from "../../../utils/http";

const { Sider, Header, Content } = Layout;

const items = [
  {
    key: "/app/owner/services",
    label: "Services",
    icon: <AppstoreOutlined />,
  },
  {
    key: "/app/owner/staff",
    label: "Staff",
    icon: <TeamOutlined />,
  },
  {
    key: "/app/owner/stats",
    label: "Statistics",
    icon: <BarChartOutlined />,
  },
  {
    key: "/app/owner/settings",
    label: "Settings",
    icon: <SettingOutlined />,
  },
];

const Ownerlayout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleNavigate = ({ key }) => {
    navigate(key);
  };

  const siderStyle = {
    overflow: "auto",
    height: "100vh",
    position: "sticky",
    insetInlineStart: 0,
    top: 0,
    bottom: 0,
    scrollbarWidth: "thin",
    scrollbarGutter: "stable",
  };

  const headerStyle = {
    position: "sticky",
    top: 0,
    zIndex: 1,
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: 0,
  };

  //logout
  const logout = async () => {
    try {
      setLoading(true);
      await http.post("/api/auth/logout");
      navigate("/");
      setLoading(false);
    } catch (err) {
      setLoading(false);
      toast.error(err.response ? err.response.data.message : err.message);
    }
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout className="min-h-screen!">
      <Sider style={siderStyle} collapsible collapsed={open}>
        <div className="flex items-center justify-center my-4">
          <Image
            src="/icon.png"
            width={60}
            height={60}
            alt="logo"
            className="rounded-full text-center! mx-auto mb-3"
          />
        </div>
        <Menu
          SelectedKeys={[pathname]}
          theme="dark"
          items={items}
          onClick={handleNavigate}
        />
      </Sider>
      <Layout>
        <Header
          style={headerStyle}
          className="flex items-center justify-between px-5! bg-white! shadow!"
        >
          <Button onClick={() => setOpen(!open)} icon={<MenuOutlined />} />
          <Button icon={<LogoutOutlined />} onClick={logout} loading={loading}>
            Logout
          </Button>
        </Header>
        <Content
          style={{
            margin: "4px 8px",
            padding: 4,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default Ownerlayout;
