import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
    UserOutlined,
    DashboardOutlined,
    ShoppingOutlined,
    StockOutlined,
    AreaChartOutlined,
    FormOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import UsersData from './UsersData';
import ViewBlogDetails from '../Blog_Management/ViewBlogDetails';
import ProductTable from '../Product_Management/ProductTable';
import MachineTable from '../Product_Management/MachineTable';
import FertilizerTable from '../Product_Management/FertilizerTable';
import AddProductForm from '../Product_Management/AddProductForm';


const { Sider, Content } = Layout;

const AdminDashboard = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const content = [
        <div></div>,
        <UsersData />,
        <ProductTable />,
        <MachineTable />,
        <FertilizerTable />,
        <AddProductForm />,
        <ViewBlogDetails />,
        <div></div>,
        <div></div>,
        <div></div>,
    ]


    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider width={200} theme="dark" collapsible>
                <Menu mode="inline" theme="dark" defaultSelectedKeys={['users']}>
                    <Menu.Item key="dashboard"

                        onClick={() => {
                            setActiveIndex(0)
                        }}
                        icon={<DashboardOutlined />}>
                        Dashboard
                    </Menu.Item>
                    <Menu.Item
                        onClick={() => {
                            setActiveIndex(1)
                        }}
                        key="users" icon={<UserOutlined />}>
                        Users
                    </Menu.Item>
                    {/* <Menu.Item
                        onClick={() => {
                            setActiveIndex(2)
                        }}

                        key="products" icon={<ShoppingOutlined />}>
                        Products
                    </Menu.Item>
                    <Menu.Item
                        onClick={() => {
                            setActiveIndex(3)
                        }}
                        key="inventory" icon={<StockOutlined />}>
                        Inventory
                    </Menu.Item> */}
                    <Menu.Item
                        onClick={() => {
                            setActiveIndex(2)
                        }}
                        key="plants" icon={<ShoppingOutlined />}>
                        Plants
                    </Menu.Item>
                    <Menu.Item
                        onClick={() => {
                            setActiveIndex(3)
                        }}
                        key="machines" icon={<ShoppingOutlined />}>
                        Machines
                    </Menu.Item>
                    <Menu.Item
                        onClick={() => {
                            setActiveIndex(4)
                        }}
                        key="fertilizers" icon={<ShoppingOutlined />}>
                        Fertilizers
                    </Menu.Item>
                    <Menu.Item
                        onClick={() => {
                            setActiveIndex(5)
                        }}
                        key="addnewproduct" icon={<ShoppingOutlined />}>
                        Add New Product
                    </Menu.Item>
                    <Menu.Item
                        onClick={() => {
                            setActiveIndex(6)
                        }}
                        key="blogs" icon={<FormOutlined />}>
                        Blogs
                    </Menu.Item>
                    <Menu.Item
                        onClick={() => {
                            setActiveIndex(7)
                        }}
                        key="invests" icon={<AreaChartOutlined />}>
                        Invests
                    </Menu.Item>
                    {/* <Menu.Item
                        onClick={() => {
                            setActiveIndex(4)
                        }}
                        key="analytics" icon={<PieChartOutlined />}>
                        Analytics
                    </Menu.Item> */}
                </Menu>
            </Sider>
            <Layout>
                <Content style={{ margin: '24px 16px 0' }}>
                    <div style={{ adding: 24, minHeight: 360 }}>
                        {content.length !== 0 && content[activeIndex]}
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default AdminDashboard;
