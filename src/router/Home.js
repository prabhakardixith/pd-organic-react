import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {

  const navigate  = useNavigate()

  return (
    <>
      <p style={{position:'absolute',top:'70px',left:0,right:'0',zIndex:-1}}>React Crud Operation Application</p>
      {/* <button onClick={()=> navigate('crud')}>View CRUD</button> */}
    </>
  );
};

export default Home;
