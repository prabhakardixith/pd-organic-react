import React from "react";
import { useState, useEffect, useContext,setEditId } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import MuiTable from "./MuiTable";
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
const Get = ({ setCount, count, setEditId, loading, setLoading, baseUrl }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [page, setPage] = useState(0)
  const [pageCount, setPageCount] = useState(0)

  useEffect(() => {
    // console.log("use Effect Get");
    axios
      // .get("https://pd-organic.herokuapp.com/user")
      .get(baseUrl+`?pageNo=${page}`)
      .then((res) => {
        setData(res.data.content);
        console.log(res.data);
        // console.log(baseUrl+`?pageNo=${page}`);
        setPageCount(res.data.totalPages);
        setCount(res.data.totalElements);
        setLoading(false);
      })
      .catch((er) => setError(er.message));
  }, [count,page]);

  const updateUser = (d) => {
    // console.log("updateUser "+JSON.stringify(d))
    setEditId(d.userId);
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

    return () => {
      console.log("Get Component unmounted");
    };
  };

  
  return loading ? (
    // <Box sx={{ width: 700}} >
    //   <Skeleton />
    //   <Skeleton animation="wave" />
    //   <Skeleton animation="wave" />
    //   <Skeleton animation="wave" />
    //   <Skeleton animation={false} />
    // </Box>
    <CircularProgress color='primary' style={{ marginLeft:'200px',marginTop:'150px' }}/>
  ) : (
    <div style={{marginBottom:'50px'}}>
      {!data?.length ? (
        <Typography variant="h4" >
          List is empty
        </Typography>
      ) : (
        <Typography variant="h4" >
          All Users
        </Typography>
      )}
      {error && (
        <Typography variant="body1" >
          Error Message : {error}
        </Typography>
      )}
      {!error && data && (
        <MuiTable setPage={setPage} pageCount={pageCount} data={data} updateUser={updateUser} deleteUser={deleteUser} />
      )}
    </div>
  );
};

export default Get;
