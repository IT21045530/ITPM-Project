import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
    DashboardOutlined,
    ShoppingOutlined,
} from '@ant-design/icons';
import UsersData from './UsersData';
import ViewBlogDetails from '../Blog_Management/ViewBlogDetails';
import ProductTable from '../Product_Management/ProductTable';
import MachineTable from '../Product_Management/MachineTable';
import FertilizerTable from '../Product_Management/FertilizerTable';
import AddProductForm from '../Product_Management/AddProductForm';
import AddMachineForm from '../Product_Management/AddMachineForm';
import AddFertilizerForm from '../Product_Management/AddFertilizerForm';
import WelcomeSellerDashboard from './WelcomeSellerDashboard';
import EcoIcon from '@material-ui/icons/Eco';
import SettingsIcon from '@material-ui/icons/Settings';
import WorkIcon from '@material-ui/icons/Work';
import AddBoxIcon from '@material-ui/icons/AddBox';


const { Sider, Content } = Layout;

const AdminDashboard = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const content = [
        <WelcomeSellerDashboard />,
        <ProductTable />,
        <MachineTable />,
        <FertilizerTable />,
        <AddProductForm />,
        <AddMachineForm />,
        <AddFertilizerForm />,
        <ViewBlogDetails />,
    ]


    return (
        <Layout style={{ height: 'auto' }}>
            <Sider width={180} theme="light" collapsible>
                <Menu mode="inline" theme="light" defaultSelectedKeys={['Dashboard']}>
                    <Menu.Item key="Dashboard"

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
                        key="plants" icon={<EcoIcon />}>
                        Plants
                    </Menu.Item>
                    <Menu.Item
                        onClick={() => {
                            setActiveIndex(2)
                        }}
                        key="machines" icon={<SettingsIcon />}>
                        Machines
                    </Menu.Item>
                    <Menu.Item
                        onClick={() => {
                            setActiveIndex(3)
                        }}
                        key="fertilizers" icon={<WorkIcon />}>
                        Fertilizers
                    </Menu.Item>
                    <Menu.Item
                        onClick={() => {
                            setActiveIndex(4)
                        }}
                        key="addnewproduct" icon={<AddBoxIcon />}>
                        Add Plant
                    </Menu.Item>
                    <Menu.Item
                        onClick={() => {
                            setActiveIndex(5)
                        }}
                        key="addnewmachine" icon={<AddBoxIcon />}>
                        Add Machine
                    </Menu.Item>
                    <Menu.Item
                        onClick={() => {
                            setActiveIndex(6)
                        }}
                        key="addnewfertilizer" icon={<AddBoxIcon />}>
                        Add Fertilizer
                    </Menu.Item>
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
