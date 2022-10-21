import React, { useState, useEffect } from "react";
import axios from "axios";
import { Typography, TextField, Button } from "@mui/material";
import { Paper, Grid } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
const Post = ({ setCount, edit, setEdit, setEditId, baseUrl, loading }) => {
  const [forms, setForms] = useState();
  const [editor, setEditor] = useState();
  const [user, setUser] = useState({
    userId: 0,
    userName: "",
    emailId: "",
    phoneNo: "",
    address: "",
  });

  const addUser = () => {
    if (!edit) {
      console.log("new User :" + JSON.stringify(user));
      axios
        .post(baseUrl, user)
        .then((res) => setCount(res.data.length))
        .then((res) =>
          setUser({
            userId: 0,
            userName: "",
            emailId: "",
            phoneNo: "",
            address: "",
          })
        )
        .catch((er) => console.log("Error in Post : " + er.message));
    } else {
      console.log("editor User :" + JSON.stringify(editor));
      axios
        .put(baseUrl, editor)
        .then((res) => {
          setCount(0);
          setEditor({});
        })
        .then((res) => {
          setEditor(null);
          setEdit(null);
          setEditId(null);
        })
        .catch((er) => console.log("Error in Put : " + er.message));
    }
  };

  return (
    <div style={{ marginTop: "30px", marginBottom: "30px" }}>
      {loading && (
        <CircularProgress
          color="warning"
          style={{ marginLeft: "200px", marginTop: "150px" }}
        />
      )}
      {!edit
        ? !loading && <Typography variant="h4">Add New User</Typography>
        : !loading && <Typography variant="h4">Edit New User</Typography>}
      {!loading && !editor && edit && setEditor(edit)}
      {!loading && (
        <Grid style={{ marginTop: "30px" }} spacing={3}>
          <Paper
            style={{
              padding: "50px 10px",
              width: "350px",
              // marginLeft:'10px'
            }}
            align="center"
            spacing={4}
            elevation={4}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                addUser();
              }}
            >
              <TextField
                onChange={(e) =>
                  editor
                    ? setEditor({ ...editor, userName: e.target.value })
                    : setUser({ ...user, userName: e.target.value })
                }
                fullWidth
                value={editor ? editor?.userName : user?.userName}
                label="User Name"
                style={{ marginBottom: "10px" }}
              />
              <TextField
                style={{ paddingBottom: "10px" }}
                onChange={(e) =>
                  editor
                    ? setEditor({ ...editor, emailId: e.target.value })
                    : setUser({ ...user, emailId: e.target.value })
                }
                value={editor ? editor?.emailId : user?.emailId}
                fullWidth
                label="User Email"
              />
              <TextField
                style={{ paddingBottom: "10px" }}
                onChange={(e) =>
                  editor
                    ? setEditor({ ...editor, phoneNo: e.target.value })
                    : setUser({ ...user, phoneNo: e.target.value })
                }
                value={editor ? editor?.phoneNo : user?.phoneNo}
                fullWidth
                label="Mobile Number"
              />

              <TextField
                style={{ paddingBottom: "10px" }}
                onChange={(e) =>
                  editor
                    ? setEditor({ ...editor, address: e.target.value })
                    : setUser({ ...user, address: e.target.value })
                }
                value={editor ? editor?.address : user?.address}
                fullWidth
                label="Address"
              />

              <Button variant="outlined" type="submit" endIcon={<SendIcon />}>
                Submit
              </Button>
              <Button
                variant="outlined"
                type="reset"
                endIcon={<SendIcon />}
                onClick={() => (editor ? setEditor({}) : setUser({}))}
              >
                Reset
              </Button>
            </form>
          </Paper>
        </Grid>
      )}
    </div>
  );
};

export default Post;

// const handleForm = () => {
//   const formVal = { status: true, name: "", email: "" };
//   if (editor) {
//     if (editor.userName === "" || editor.emailId === "") {
//       if (editor.userName === "") {
//         formVal.name =
//           "editor Name is invalid or editor Name cannot be empty";
//       }
//       if (editor.emailId === "") {
//         formVal.email =
//           "editor Email is invalid or editor Email cannot be empty";
//       }
//       formVal.status = false;
//       return formVal;
//     }
//   }
//   if (user) {
//     if (user.userName === "" || user.emailId === "") {
//       if (user.userName === "") {
//         formVal.name = "User Name is invalid or User Name cannot be empty";
//       }
//       if (user.emailId === "") {
//         formVal.email = "User Email is invalid or User Email cannot be empty";
//       }
//       formVal.status = false;
//       return formVal;
//     }
//   }
//   return formVal;
// };
