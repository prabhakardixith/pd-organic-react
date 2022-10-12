import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { Route,Routes } from "react-router-dom";
import Main from "./crud/Main";
import About from "./router/About";
import Crud from "./router/Crud";
import Home from "./router/Home";
import Navbar from "./router/Navbar";

function App() {

  useEffect(() => {
    document.title = "CRUD"
  
    return () => {
      
    }
  }, [])
  

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="about" element={<About/>}></Route>
        <Route path="crud" element={<Crud/>}></Route>
      </Routes>

      
    </>

  );
}

export default App;

// package.json for heroku

// "scripts": {
//   "start": "react-scripts start",
//   "build": "react-scripts build",
//   "test": "react-scripts test",
//   "eject": "react-scripts eject"
// }


//with maxppol

// "scripts": {
//   "start": "node --max_old_space_size=2048 node_modules/.bin/react-scripts start",
//   "build": "node --max_old_space_size=2048 node_modules/.bin/react-scripts build",
//   "test": "react-scripts test",
//   "eject": "react-scripts eject"
// }