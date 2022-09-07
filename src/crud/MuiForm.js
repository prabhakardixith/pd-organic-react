import React from 'react'
import {Paper,Grid, TextField,Typography,Button} from '@mui/material';
const MuiForm = () => {
    const paperStyle ={
        padding: '30px 10px',
        width: '350px',
    }
  return (
    <Grid style={{marginTop: '30px'}}>
        <Paper style={paperStyle} align="center" spacing={2}>
            <form>
                <TextField fullWidth label='User Name'/>
                <TextField fullWidth label='User Email'/>
                <Button type="submit" variant="contained">Submit</Button>
                <Button type="reset" variant="contained">Reset</Button>
            </form>

        </Paper>
    </Grid>
  )
}

export default MuiForm
