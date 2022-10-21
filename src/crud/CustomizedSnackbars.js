import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars({yes,setYes,setNo,no,setError,error}) {
  const [openSucces, setOpenSucess] = React.useState(yes);
  const [openError, setOpenError] = React.useState(no);
  
  const handleSuccessClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setError(null);
    setOpenSucess(false);
  };

  const handleErrorClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setError(null);
    setOpenError(false);
  };


  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      
      <Snackbar open={openSucces ? true : false} autoHideDuration={2000} onClose={handleSuccessClose}>
        <Alert onClose={handleSuccessClose} severity="success" sx={{ width: '100%' }}>
          Data Fetched Successfully
        </Alert>
      </Snackbar>

      <Snackbar open={openError ? true : false} autoHideDuration={2000} onClose={handleErrorClose}>
        <Alert onClose={handleErrorClose} severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>
      
    </Stack>
  );
}
