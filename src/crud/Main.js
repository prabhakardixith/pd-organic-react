import React from "react";
import Get from "./Get";
import GetOperationalStatus from "./GetOperationalStatus";
import Post from "./Post";
import { Button, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import MuiForm from "./MuiForm";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";

const Main = () => {
  const [url, setUrl] = useState("https://pd-organic.herokuapp.com/user"); // "https://pd-organic.herokuapp.com/user"
  const [edit, setEdit] = useState();
  const [editId, setEditId] = useState();
  const [deleted, setDeleted] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "User List";
  }, []);
  const [count, setCount] = useState();

  useEffect(() => {
    if (editId != null) {
      axios
        .get(`https://pd-organic.herokuapp.com/userById?id=${editId}`)
        .then((response) => setEdit(response.data))
        .catch((error) => console.log("error while reading user by id"));
    }
  }, [editId]);

  const [active, setActives] = useState(false); // operationalStatus
  const setActive = () => {
    console.log("is active");
    setActives(!active);
  };
  return (
    <>
      <nav style={{ display: "inline-block",paddingLeft:'230px',paddingTop:'2px',paddingBottom:'25px',position:'absolute'}}>
        <Link
          style={{ textDecoration: "none" }}
          to="getOperationalStatus"
          onClick={() => setActive()}
        >
          {!active ? <Button variant='contained'>View Operational Status</Button> : <Button variant='contained'>User Actions</Button>} 
        </Link> 
      </nav>
      {active && <Outlet />}
      {!active && (
        <div>
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
    </>
  );
};

export default Main;
