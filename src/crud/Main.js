import React from "react";
import Get from "./Get";
import GetOperationalStatus from "./GetOperationalStatus";
import Post from "./Post";
import { Button, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import MuiForm from "./MuiForm";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";
import CustomizedSnackbars from "./CustomizedSnackbars";

const Main = () => {
  const [url, setUrl] = useState(
    "https://pd-organic.herokuapp.com/user"
    // "http://localhost:8080/user"
    ); 
  const [edit, setEdit] = useState();
  const [editId, setEditId] = useState();
  const [deleted, setDeleted] = useState();
  const [loading, setLoading] = useState(true);
  const [yes, setYes] = useState(true);
  const [no, setNo] = useState(false);
  const [error, setError] = useState()

  useEffect(() => {
    document.title = "User List";
  }, []);
  const [count, setCount] = useState();

  useEffect(() => {
    if (editId != null) {
      axios
        .get(`https://pd-organic.herokuapp.com/userById?id=${editId}`)
        .then((response) => {console.log("editUser: "+JSON.stringify(response.data));setEdit(response.data)})
        .catch((error) => console.log("error while reading user by id"));
    }
  }, [editId]);

  const [active, setActives] = useState(false); // operationalStatus
  const setActive = () => {
    console.log("is active");
    setActives(!active);
  };
  return (
    <div style={{position:'absolute',top:'70px',left:0,right:'0',zIndex:-1}}>
      <nav style={{ display: "inline-block",paddingLeft:'230px',paddingTop:'2px',paddingBottom:'25px',position:'absolute'}}>
        <Link
          style={{ textDecoration: "none" }}
          to="getOperationalStatus"
          onClick={() => setActive()}
        >
          {!active ? <Button variant='contained'>Operations</Button> : <Button variant='contained'>User Actions</Button>} 
        </Link> 
      </nav>
      {active && <Outlet />}
      {!active && (
        <div style={{ marginLeft:'10px',marginRight:'10px'}}>
          {/* Crud */}

          {count ? (
            <Typography variant="h5">Total user count : {count}</Typography>
          ) : (
            <Typography variant="h5">Total user count : </Typography>
          )}

          {
            <Post
              loading={loading}
              baseUrl={url}
              setEditId={setEditId}
              setCount={setCount}
              edit={edit}
              setEdit={setEdit}
            />
          }
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
          

          {/* <GetOperationalStatus count={count} baseUrl={url} /> */}
        </div>
      )}
      {
        loading && error && <CustomizedSnackbars error={error} setError={setError}yes={yes} setYes={setYes} no={no} setNo={setNo}/>
      }
      {
        !loading && !error && <CustomizedSnackbars error={error} setError={setError}yes={yes} setYes={setYes} no={no} setNo={setNo}/>
      }    </div>
  );
};

export default Main;
