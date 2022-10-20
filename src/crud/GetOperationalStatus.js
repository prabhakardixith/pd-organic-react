import axios from 'axios'
import {React} from 'react'
import { useState, useEffect} from 'react'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CircularProgress } from '@mui/material';
import {Skeleton} from '@mui/material';
import {Box} from '@mui/material';
import { Stack } from '@mui/system';
import Pagination from '@mui/material/Pagination';
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
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

// Component

const GetOperationalStatus = ({ count,baseUrl }) => {
  const[operationalStatus,setOperationalStatus] = useState([])
  const[isLoading,setIsLoading] = useState(true)
  const [page, setPage] = useState(1)

  useEffect(() => {
    // console.log("operationalStatus useEffect"+baseUrl);
    axios.get(`${baseUrl}/operational?pageNo=${page}`)
    .then((res) => {console.log(res.data.content);setOperationalStatus(res.data.content);setPage(res.data.totalPages);;setIsLoading(false)})
    .catch(er=> console.log("Error in Post : " + er.message))
  },[page])

  return (
    <>
    
     {/* {isLoading ?  <Stack spacing={1} sx={{ width: 700 }} ><Skeleton variant="rectangular" ></Skeleton><Skeleton variant="rectangular" ></Skeleton><Skeleton variant="rectangular" ></Skeleton><Skeleton variant="rectangular"></Skeleton><Skeleton variant="rectangular" ></Skeleton></Stack> : <Typography variant="h4" color="initial" >Operational Status</Typography>} */}
      {isLoading ?   <CircularProgress color='secondary' style={{ marginTop:'100px',marginLeft:'200px'}}/> : <Typography variant="h5" color="initial" >Operational Status</Typography>}
      {!isLoading && operationalStatus && (
      <TableContainer Component={Paper} style={{ paddingTop:'20px'}}>
      <Table aria-label="User Data" sx={{maxWidth:950}}>
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
              <StyledTableCell component="th" scope="row" >{os.message}</StyledTableCell>
              <StyledTableCell align="center">{os.messageDate}</StyledTableCell>
             <StyledTableCell align="center">{os.userId}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>

      {/* <Typography>{`${baseUrl}/operational?pageNo=${page}`}</Typography> */}
      <Pagination onChange={(e,value)=> setPage(value)} defaultPage={page} count={5} color='primary' variant='outlined' showFirstButton showLastButton/>
    </TableContainer>)
    }
    </>
  )
}

export default GetOperationalStatus
