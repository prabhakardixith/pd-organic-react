import React from 'react'
import {useState,useEffect,useContext} from 'react'
import axios from 'axios';


const Get = ({setCount,count}) => {

    const [data, setData] = useState([]);
    const [error, setError] = useState();
    
    useEffect(() => {
      axios.get('https://pd-organic.herokuapp.com/user')
      .then(res => {setData(res.data);setCount(res.data.length)})
      .catch(er => setError(er.message))
    }, [count])
    
  return (
    <div>
        <h1>All Users</h1>
      {error && <p>Error Message : {error}</p>}
      {!error && data && data.map(d => (<p key={d.userId}>id : {d.userId} , Name : {d.userName} , Email : {d.emailId}</p>))}
    </div>
  )
}

export default Get
