import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CircularProgress from '@mui/material/CircularProgress';
import MuiTable from './MuiTable'
const Get = ({ setCount, count, setEdit, loading, setLoading, baseUrl }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  

  useEffect(() => {
    // console.log("use Effect Get");
    axios
      // .get("https://pd-organic.herokuapp.com/user")
      .get(baseUrl)
      .then((res) => {
        setData(res.data);
        setCount(res.data.length);
        setLoading(false);
      })
      .catch((er) => setError(er.message));
  }, [count]);

  const updateUser = (d) => {
    setEdit(d);
  };

  const deleteUser = (d) => {
    console.log("Delete User Id :" + d);
    axios
      // .delete(`https://pd-organic.herokuapp.com/user?id=${d}`)
      .delete(`${baseUrl}?id=${d}`)
      .then((res) => {
        setCount(res.data.length);
      })
      .catch((er) => setError(er.message));

      return ()=>{
        console.log("Get Component unmounted");
      }
  };
  return loading ? (
    <Button align="center">
        <CircularProgress />
      </Button>
  ) : (
    <div>
      {!data?.length ? <Typography variant="h4" align="center">List is empty</Typography> : <Typography variant="h4" align="center">All Users</Typography>}
      {error && <Typography variant="body1" align="center">Error Message : {error}</Typography>}
      {!error &&
        data &&
       <MuiTable data={data} updateUser={updateUser} deleteUser={deleteUser}/>}
      
    </div>
  );
};

export default Get;
