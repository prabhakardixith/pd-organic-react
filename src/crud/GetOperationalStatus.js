import axios from "axios";
import { React } from "react";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CircularProgress } from "@mui/material";
import { Skeleton } from "@mui/material";
import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import Pagination from "@mui/material/Pagination";
import Alert from '@mui/material/Alert';
import CustomizedSnackbars from "./CustomizedSnackbars";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

// Component

const GetOperationalStatus = ({ baseUrl }) => {
  const [operationalStatus, setOperationalStatus] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [yes, setYes] = useState(false);
  const [no, setNo] = useState(false);
  const [error, setError] = useState()

  useEffect(() => {
    // console.log("operationalStatus useEffect"+baseUrl);
    axios
      .get(`${baseUrl}/operational?pageNo=${page}`)
      .then((res) => {
        setOperationalStatus(res.data.content);
        setPageCount(res.data.totalPages);
        setIsLoading(false);
        setYes(true);
      })
      .catch((er) =>{setNo(true);setError(er.message); console.log("Error in Post : " + er.message)});
  }, [page]);

  return (
    <>
      {/* {isLoading ?  <Stack spacing={1} sx={{ width: 700 }} ><Skeleton variant="rectangular" ></Skeleton><Skeleton variant="rectangular" ></Skeleton><Skeleton variant="rectangular" ></Skeleton><Skeleton variant="rectangular"></Skeleton><Skeleton variant="rectangular" ></Skeleton></Stack> : <Typography variant="h4" color="initial" >Operational Status</Typography>} */}
      
      {isLoading ? (
        <CircularProgress
          color="secondary"
          style={{ marginTop: "100px", marginLeft: "200px" }}
        />
      ) : (
        <Typography variant="h5" color="initial" style={{marginLeft:'10px'}}>
          Operational Status
        </Typography>
      )}
      {!isLoading && operationalStatus && (
        <Paper elevation={4} style={{marginTop:'20px',marginLeft:'10px',marginRight:'10px',marginBottom:'50px'}}>
          <TableContainer Component={Paper} style={{ paddingTop: "0px" }} >
            <Table aria-label="User Data" sx={{ maxWidth:'100%' }}>
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">Operation Id</StyledTableCell>
                  <StyledTableCell align="center">Message</StyledTableCell>
                  <StyledTableCell align="center">Message Date</StyledTableCell>
                  <StyledTableCell align="center">User Id</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {operationalStatus.map((os) => (
                  <StyledTableRow key={os.id}>
                    <StyledTableCell align="center">{os.id}</StyledTableCell>
                    <StyledTableCell component="th" scope="row" align="center">
                      {os.message}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {os.messageDate}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {os.userId}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>

            {/* <Typography>{`${baseUrl}/operational?pageNo=${page}`}</Typography> */}
            <Pagination
              onChange={(e, value) => {setPage(value - 1);}}
              count={pageCount}
              color="primary"
              showFirstButton
              showLastButton
            />
          </TableContainer>
        </Paper>
      )}
      {
        isLoading && error && <CustomizedSnackbars error={error} setError={setError}yes={yes} setYes={setYes} no={no} setNo={setNo}/>
      }
      {
        !isLoading && !error && <CustomizedSnackbars error={error} setError={setError}yes={yes} setYes={setYes} no={no} setNo={setNo}/>
      }

    </>
  );
};

export default GetOperationalStatus;
