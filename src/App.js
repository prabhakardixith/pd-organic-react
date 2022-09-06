import { Typography } from "@mui/material";
import { useState, useEffect } from "react";

import Main from "./crud/Main";


import MuiButton from "./mui/MuiButton";
function App() {

  useEffect(() => {
    document.title = "CRUD"
  
    return () => {
      
    }
  }, [])
  

  return (
    <div>
      <Typography variant="h5">
        MUI Project
        </Typography>
      {/* crud */}
      <Main/>

     {/* mui practice */}
      {/* <MuiButton /> */}
    </div>
  );
}

export default App;
