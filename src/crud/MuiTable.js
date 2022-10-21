import React from "react";
import {
  TableContainer,
  Table,
  styled,
  TableHead,
  TableBody,
  tableCellClasses,
  TableRow,
  TableCell,
  Paper
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CircularProgress from '@mui/material/CircularProgress';
import {useState} from 'react'
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

const MuiTable = ({data,deleteUser,updateUser,pageCount,setPage}) => {
  
  return (
    <Paper elevation={4}>
      <TableContainer Component={Paper} >
      <Table aria-label="User Data" sx={{maxWidth:950}}>
        <TableHead>
            <TableRow>
                <StyledTableCell align="center">Id</StyledTableCell>
                <StyledTableCell align="center">Name</StyledTableCell>
                <StyledTableCell align="center">Email</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {
                 data.map((d) => (
                    <StyledTableRow key={d.userId} sx={{ '&:last-child td, &:last-child th':{border:0}}}>
                        <StyledTableCell align="center" component="th" scope="row">{d.userId}</StyledTableCell>
                        <StyledTableCell align="center">{d.userName}</StyledTableCell>
                        <StyledTableCell align="center">{d.emailId}</StyledTableCell>
                        <StyledTableCell align="center">
                          <EditIcon onClick={() => updateUser(d)} variant="outlined"  style={{marginRight:'15px'}}>Edit</EditIcon>
                          <DeleteIcon  style={{marginLeft:'15px'}} onClick={() => deleteUser(d.userId)} variant="outlined" color="warning" alignment="center" enableRipple></DeleteIcon>
                          </StyledTableCell>
                        
                    </StyledTableRow>
                  ))
            }
        </TableBody>
      </Table>
      <Pagination  onChange={(e,value)=> setPage(value-1)} count={pageCount} color='primary' showFirstButton showLastButton/>
    </TableContainer>
    </Paper>
  );
};

export default MuiTable;
