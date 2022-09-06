import React, { useState, useEffect } from "react";
import axios from "axios";
const Post = ({ setCount, edit, setEdit,baseUrl }) => {
  const [forms, setForms] = useState();
  const [editor, setEditor] = useState();
  const [user, setUser] = useState({
    userId: 0,
    userName: "",
    emailId: "",
  });

  const addUser = () => {
    // const formStatus = handleForm();
    // if (formStatus.status === true) {
    if (!edit) {
      console.log("new User :"+JSON.stringify(user));
      axios
        // .post("https://pd-organic.herokuapp.com/user", user)
        .post(baseUrl, user)
        .then(res => setCount(res.data.length))
        .then(res => setUser({
          userId: 0,
          userName: "",
          emailId: "",
        }))
        .catch((er) => console.log("Error in Post : " + er.message));
    } else {
      console.log("editor User :"+JSON.stringify(editor));
      axios
        // .put("https://pd-organic.herokuapp.com/user", editor)
        .put(baseUrl, editor)
        .then((res) => {
          setCount(0);
          setEditor({});
        })
        .then((res) => {
          setEditor(null);
          setEdit(null);
        })
        .catch((er) => console.log("Error in Put : " + er.message));
    }
    // } else {
    //   console.log(formStatus);
    //   setForms(formStatus);
    //   setUser(null);
    //   setEditor({})
    // }
  };

  
  return (
    <div>
      {!edit ? <h1>Add New User</h1> : <h1>Edit New User</h1>}
      {!editor && edit && setEditor(edit)}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addUser();
        }}
      >
        <label>User Name : </label>
        <input
          value={editor ? editor?.userName : user?.userName}
          type="text"
          onChange={(e) =>
            editor
              ? setEditor({ ...editor, userName: e.target.value })
              : setUser({ ...user, userName: e.target.value })
          }
        />
        {/* {forms && <p>{forms.name}</p>} */}
        <br />
        <label>User Email : </label>
        <input
          value={editor ? editor?.emailId : user?.emailId}
          type="text"
          onChange={(e) =>
            editor
              ? setEditor({ ...editor, emailId: e.target.value })
              : setUser({ ...user, emailId: e.target.value })
          }
        />
        {/* {forms && <p>{forms.email}</p>} */}
        <br />
        <input type="submit" />
        <input
          type="reset"
          onClick={() => (editor ? setEditor({}) : setUser({}))}
        />
      </form>
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