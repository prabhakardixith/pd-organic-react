import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Users from "./dynamic/Users";
const Home = () => {

  const navigate  = useNavigate()

  return (
    <>
      <div style={{position:'absolute',top:'70px',left:0,right:'0',zIndex:-1}}>React Crud Operation Application
      </div>
      
    </>
  );
};

export default Home;
