import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("userData") !== null) navigate("/dashboard");
    else navigate("/login");
  });
  return <div></div>;
};

export default Home;
