import React from 'react'
import {useState,useEffect,useContext} from 'react'
import axios from 'axios';


const Get = ({setCount,count,setEdit,loading,setLoading}) => {

    const [data, setData] = useState([]);
    const [error, setError] = useState();
    
    
    useEffect(() => {
      axios.get('https://pd-organic.herokuapp.com/user')
      .then(res => {setData(res.data);setCount(res.data.length);setLoading(false)})
      .catch(er => setError(er.message))
    }, [count])
    
    const updateUser = (d)=>{
      setEdit(d);
    }

    const deleteUser = (d)=>{
      console.log("Delete User Id :"+d);
      axios.delete(`https://pd-organic.herokuapp.com/user?id=${d}`)
      .then(res => {setCount(res.data.length)})
      .catch(er => setError(er.message))
      
    }
  return (loading ? (<div><h1>Loading...</h1></div>):
    (<div>
       {!count ? <h1>List is empty</h1>:<h1>All Users</h1>}
      {error && <p>Error Message : {error}</p>}
      {!error && data && data.map(d => (<p key={d.userId}>Name : {d.userName} , Email : {d.emailId} <button onClick={()=>updateUser(d)}>Edit</button><button onClick={()=>deleteUser(d.userId)}>Delete</button></p>))}
    </div>)
  )
}

export default Get
