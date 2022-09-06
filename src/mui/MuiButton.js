import { Stack, Button, IconButton,ButtonGroup,ToggleButtonGroup,ToggleButton } from "@mui/material";
import React from "react";
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon  from "@mui/icons-material/FormatBold";
import FormatItalicIcon  from "@mui/icons-material/FormatItalic";
import FormatUnderlineIcon from  "@mui/icons-material/FormatUnderlined";
import { useState, useEffect    } from 'react'
const MuiButton = () => {
    const [formats, setFormats] = useState([])

    const handleFormatChange =(event,updatedFormats) => {
        setFormats(updatedFormats)
        console.log({formats,});
    } 
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="contained">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="outlined" color="success">
          Success
        </Button>
      </Stack>

      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small" color="info">
          Info
        </Button>
        <Button variant="contained" size="large" color="info">
          Success
        </Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="contained" startIcon={<SendIcon />}>
          Send
        </Button>

        <Button variant="contained" endIcon={<SendIcon />} disableElevation disableRipple>
          Send
        </Button>

        <IconButton aria-label="Send" color="primary">
          <SendIcon />
        </IconButton>
      </Stack>

      <Stack direction="row">
        <ButtonGroup variant="contained" orientation="vertical" size="large" color="secondary" aria-label="alignment button group">
        <Button >Left</Button>
        <Button  >Center</Button>
        <Button  >Right</Button>
        <Button >Top</Button>
        <Button  >Bottom</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction="row" >
        <ToggleButtonGroup aria-label="Text Formatting" value={formats} onChange={handleFormatChange} color="primary" orientation="vertical">
            <ToggleButton value="bold" aria-label="bold"><FormatBoldIcon/></ToggleButton>
            <ToggleButton value="italic" aria-label="italic"><FormatItalicIcon /></ToggleButton>
            <ToggleButton value="underlined" aria-label="underlined"><FormatUnderlineIcon/></ToggleButton>
        </ToggleButtonGroup>
        </Stack>
    </Stack>
  );
};

export default MuiButton;
