import React from 'react'
import Get from "./Get";
import GetOperationalStatus from "./GetOperationalStatus";
import Post from "./Post";
import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
const Main = () => {
    const[url,setUrl] = useState("http://localhost:8080/user"); // "https://pd-organic.herokuapp.com/user"
    const [edit, setEdit] = useState();
    const [deleted, setDeleted] = useState();
    const [loading, setLoading] = useState(true); 
  
    useEffect(() => {
      document.title = "User List";
    }, []);
    const [count, setCount] = useState();
  return (
    <div>
       {/* Crud */}

      {count ? (
        <Typography variant="h4" align="center">Total user count : {count}</Typography>
      ) : (
        <Typography variant="h4" align="center">Total user count : </Typography>
      )}
      <Get
        setCount={setCount}
        count={count}
        setEdit={setEdit}
        loading={loading}
        setLoading={setLoading}
        baseUrl={url}
      />
      {<Post loading={loading} baseUrl={url} setCount={setCount} edit={edit} setEdit={setEdit} />}
      <GetOperationalStatus count={count} baseUrl={url}/>
    </div>
  )
}

export default Main
