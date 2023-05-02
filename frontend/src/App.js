import { Route, Routes } from "react-router-dom";
import React from "react";
import NavBar from "./Components/NavBar";
import Blog from "./Pages/Blog";
import Home from "./Pages/Home";
import AddProductForm from "./Pages/Product_Management/AddProductForm";
import AddProducts from "./Pages/Product_Management/AddProducts";
import Fertilizer from "./Pages/Product_Management/Fertilizer";
import Machines from "./Pages/Product_Management/Machines";
import Plants from "./Pages/Product_Management/Plants";
import Products from "./Pages/Product_Management/Products";
import Seller from "./Pages/Product_Management/Seller";
import Footer from "./Components/Footer";
import OurServices from "./Pages/Product_Management/OurServices";
import ViewProducts from "./Pages/Product_Management/ViewProducts";
import FlowersPList from "./Pages/Product_Management/FlowersPList";
import ProductTable from "./Pages/Product_Management/ProductTable";
import PaymentForm from "./Pages/Product_Management/Paymentform";
import PayNow from "./Pages/Product_Management/PayNow";

import Test from "./Pages/Admin_Management/test";
import Login from "./Pages/Admin_Management/Login";
import RegisterUser from "./Pages/Admin_Management/RegisterUser";
import Testpage from "./Pages/Blog_Management/TestPage";

import ThankYou from "./Pages/Product_Management/ThankYou";
import WelcomeSeller from "./Pages/Product_Management/WelcomeSeller";
import TextControlsExample from "./Pages/Blog_Management/AddBlog"; //function name  , file path



import AddMachineForm from "./Pages/Product_Management/AddMachineForm";
import AddFertilizerForm from "./Pages/Product_Management/AddFertilizerForm";
import ViewPlant from "./Pages/Product_Management/ViewPlant";
import ViewMachines from "./Pages/Product_Management/ViewMachines";
import ViewFertilizer from "./Pages/Product_Management/ViewFertilizer";
import MachineTable from "./Pages/Product_Management/MachineTable";
import FertilizerTable from "./Pages/Product_Management/FertilizerTable";
import PlantUpdate from "./Pages/Product_Management/PlantUpdate";
import MachineUpdate from "./Pages/Product_Management/MachineUpdate";
import FertilizerUpdate from "./Pages/Product_Management/FertilizerUpdate";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path="/Blogs" element={<Blog />} />
        <Route exact path="/Seller" element={<Seller />} />
        <Route exact path="/Plants" element={<Plants />} />
        <Route exact path="/Machines" element={<Machines />} />
        <Route exact path="/Fertilizer" element={<Fertilizer />} />
        <Route exact path="/Products" element={<Products />} />
        <Route exact path="/AddProducts" element={<AddProducts />} />
        <Route exact path="/AddProductForm" element={<AddProductForm />} />
        <Route exact path="/OurServices" element={<OurServices />} />
        <Route exact path="/ViewProducts" element={<ViewProducts />} />
        <Route exact path="/FlowersPList" element={<FlowersPList />} />
        <Route exact path="/ProductTable" element={<ProductTable />} />


        <Route exact path="/Test" element={<Test />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Register" element={<RegisterUser />} />


        <Route exact path="/Blog_Management/Testpage" element={<Testpage />} />

        <Route exact path="/PaymentForm" element={<PaymentForm />} />
        <Route exact path="/PayNow" element={<PayNow />} />
        <Route exact path="/ThankYou" element={<ThankYou />} />
        <Route exact path="/WelcomeSeller" element={<WelcomeSeller />} />
        <Route exact path="/AddMachineForm" element={<AddMachineForm />} />
        <Route exact path="/AddFertilizerForm" element={<AddFertilizerForm />} />
        <Route exact path="/ViewPlant" element={<ViewPlant />} />
        <Route exact path="/ViewMachines" element={<ViewMachines />} />
        <Route exact path="/ViewFertilizer" element={<ViewFertilizer />} />
        <Route exact path="/MachineTable" element={<MachineTable />} />
        <Route exact path="/FertilizerTable" element={<FertilizerTable />} />
        <Route exact path="/plantUpdateDetails" element={<PlantUpdate />} />
        <Route exact path="/machineUpdateDetails" element={<MachineUpdate />} />
        <Route exact path="/fertilizerUpdateDetails" element={<FertilizerUpdate />} />



        {<Route exact path="/AddBlog" element={<TextControlsExample />} /> /*page path , funtion name  */}

      </Routes>
      <Footer />

    </>
  );
}

export default App;
