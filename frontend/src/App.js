import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Blog from "./Pages/Blog";
import Home from "./Pages/Home";
import AddProductForm from "./Pages/AddProductForm";
import AddProducts from "./Pages/AddProducts";
import Fertilizer from "./Pages/Fertilizer";
import Machines from "./Pages/Machines";
import Plants from "./Pages/Plants";
import Products from "./Pages/Products";
import Seller from "./Pages/Seller";
import Footer from "./Components/Footer";
import OurServices from "./Pages/OurServices";
import ViewProducts from "./Pages/ViewProducts";
import Test from "./Pages/Admin_Management/test";
import Login from "./Pages/Admin_Management/Login";
import Testpage from "./Pages/Blog_Management/TestPage";

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
        <Route exact path="/Admin_Management/test" element={<Test/>} />
        <Route exact path="/Admin_Management/login" element={<Login/>} />
        <Route exact path="/Blog_Management/Testpage" element={<Testpage/>}/>

      </Routes>
      <Footer />

    </>
  );
}

export default App;
