import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {

  const navigate  = useNavigate()

  return (
    <>
      <p>React Crud Operation Application</p>
      {/* <button onClick={()=> navigate('crud')}>View CRUD</button> */}
    </>
  );
};

export default Home;
