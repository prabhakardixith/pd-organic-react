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

  useEffect(() => {
    // console.log("operationalStatus useEffect"+baseUrl);
    axios.get(`${baseUrl}/operational`)
    .then((res) => {setOperationalStatus(res.data);setIsLoading(false)})
    .catch(er=> console.log("Error in Post : " + er.message))
  },[count])

  return (
    <div>
     
      {isLoading ?  <Typography variant="h4" color="initial" align="center"><CircularProgress/></Typography> : <Typography variant="h4" color="initial" align="center">Operational Status</Typography>}
      {!isLoading && operationalStatus && (<TableContainer component={Paper} align="center">
      <Table sx={{ maxWidth: 950 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Message</StyledTableCell>
            <StyledTableCell align="center">Message Date</StyledTableCell>
            <StyledTableCell align="center">User Id</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {operationalStatus.map((os) => (
            <StyledTableRow key={os.id}>
              <StyledTableCell component="th" scope="row">
                {os.message}
              </StyledTableCell>
              <StyledTableCell align="center">{os.messageDate}</StyledTableCell>
             <StyledTableCell align="center">{os.userId}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>)}
    </div>
  )
}

export default GetOperationalStatus