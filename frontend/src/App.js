import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Blog from "./Pages/Blog";
import Home from "./Pages/Home";

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path="/Blogs" element={<Blog/>}/>
      
      
    </Routes>
    
    </>
  );
}

export default App;
