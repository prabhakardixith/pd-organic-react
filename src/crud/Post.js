import React, { useState,useEffect } from 'react'
import axios from 'axios';
const Post = ({setCount,edit,setEdit}) => {
    const [editor, setEditor] = useState();
    const [user, setUser] = useState({
        userId : 0,
        userName :'',
        emailId:''
    })

    const addUser = ()=>{
        
        if(!edit){
          console.log(user);
          axios.post('https://pd-organic.herokuapp.com/user',user)
          .then(res => setCount(0))
          .then(res => setUser({}))
          .catch(er => console.log("Error in Post : "+er.message))
        }
        else{
          console.log(editor);
          axios.put('https://pd-organic.herokuapp.com/user',editor)
          .then(res => {setCount(0);setEditor({})})
          .then(res=> { setEditor(null); setEdit(null)})
          .catch(er => console.log("Error in Put : "+er.message))
        }
        
    }

  return (
    <div>
        {!edit ? <h1>Add New User</h1> : <h1>Edit New User</h1>}
        {!editor && edit && setEditor(edit)}
        <form onSubmit={(e)=>{e.preventDefault(); addUser()}}>
        <label>User Name : </label><input value={editor ? editor.userName : user.userName} type="text" onChange={(e)=> editor ? setEditor({...editor,userName:e.target.value}) : setUser({...user,userName:e.target.value})}/><br/>
        <label>User Email : </label><input value={editor ? editor.emailId : user.emailId} type="text" onChange={(e)=> editor ? setEditor({...editor,emailId:e.target.value}) : setUser({...user,emailId:e.target.value})}/><br/>
        <input type="submit"/>
        <input type="reset" onClick={()=> editor ? ()=>{setEditor({});setEdit(null)} : setUser({})}/>
      </form>
    </div>
  )
}

export default Post
