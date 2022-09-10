import { Typography } from "@mui/material";
import { useState, useEffect } from "react";

import Main from "./crud/Main";

function App() {

  useEffect(() => {
    document.title = "CRUD"
  
    return () => {
      
    }
  }, [])
  

  return (
    <div>
      {/* crud */}
      <Main/>
    </div>

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