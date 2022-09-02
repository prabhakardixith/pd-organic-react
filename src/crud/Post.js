import React, { useState,useEffect } from 'react'
import axios from 'axios';
const Post = ({setCount}) => {
    // const [finalUser, setFinalUser] = useState(null);
    const [user, setUser] = useState({
        userId : 0,
        userName :'',
        emailId:''
    })

    const addUser = ()=>{
        console.log(user);
        axios.post('https://pd-organic.herokuapp.com/user',user)
        .then(res => setCount(0))
        .catch(er => console.log("Error in Post : "+er.message))
    }

  return (
    <div>
        <h1>Add New User</h1>
      <form onSubmit={(e)=>{e.preventDefault(); addUser()}}>
        <label>User Name : </label><input type="text" onChange={(e)=> setUser({...user,userName:e.target.value})}/><br/>
        <label>User Email : </label><input type="text" onChange={(e)=> setUser({...user,emailId:e.target.value})}/><br/>
        <input type="submit"/>
      </form>
    </div>
  )
}

export default Post
