import { Route, Routes } from "react-router-dom";
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
import Testpage from "./Pages/Blog_Management/TestPage";

import ThankYou from "./Pages/Product_Management/ThankYou";
import WelcomeSeller from "./Pages/Product_Management/WelcomeSeller";

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


        <Route exact path="/Admin_Management/test" element={<Test/>} />
        <Route exact path="/Admin_Management/login" element={<Login/>} />
        <Route exact path="/Blog_Management/Testpage" element={<Testpage/>}/>

        <Route exact path="/PaymentForm" element={<PaymentForm />} />
        <Route exact path="/PayNow" element={<PayNow />} />
        <Route exact path="/ThankYou" element={<ThankYou />} />
        <Route exact path="/WelcomeSeller" element={<WelcomeSeller />} />



      </Routes>
      <Footer />

    </>
  );
}

export default App;
