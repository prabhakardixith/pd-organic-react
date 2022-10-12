import React from 'react'
import Get from "./Get";
import GetOperationalStatus from "./GetOperationalStatus";
import Post from "./Post";
import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
import MuiForm from "./MuiForm";
import axios from "axios";

const Main = () => {
    const[url,setUrl] = useState("https://pd-organic.herokuapp.com/user"); // "https://pd-organic.herokuapp.com/user"
    const [edit, setEdit] = useState();
    const [editId, setEditId] = useState();
    const [deleted, setDeleted] = useState();
    const [loading, setLoading] = useState(true); 
  
    useEffect(() => {
      document.title = "User List";
    }, []);
    const [count, setCount] = useState();

    useEffect(() => {
      if(editId != null){
        axios.get(`https://pd-organic.herokuapp.com/userById?id=${editId}`).then(response => setEdit(response.data)).catch(error => console.log("error while reading user by id"));
      }
    },[editId]);

  return (
    <div>
       {/* Crud */}

      {count ? (
        <Typography variant="h4" >Total user count : {count}</Typography>
      ) : (
        <Typography variant="h4" >Total user count : </Typography>
      )}
      <Get
        setCount={setCount}
        count={count}
        setEdit={setEdit}
        loading={loading}
        setLoading={setLoading}
        baseUrl={url}
        setEditId={setEditId}
      />
      {/* {<MuiForm/>} */}
      {<Post loading={loading} baseUrl={url} setEditId={setEditId} setCount={setCount} edit={edit} setEdit={setEdit} />}
       <GetOperationalStatus count={count} baseUrl={url}/>
    </div>
  )
}

export default Main
