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

      {/* mui practice */}
      {/* <MuiButton /> */}


      {/* crud */}
      {/* <Main/> */}
    </div>
  );
}

export default App;
