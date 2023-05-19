import React, { useEffect } from "react";
import HomeSlideShow from "./Blog_Management/HomeSlideShow";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/Register");
    }
  }, []);

  return (
    <div>
      <HomeSlideShow />
    </div>
  );
}

export default Home;
