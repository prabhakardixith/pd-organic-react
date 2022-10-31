import React from "react";
import { useParams,useSearchParams } from "react-router-dom";
const UserDetails = () => {

    const[searchParam,setSearchParam] = useSearchParams()
  const params = useParams();
  const userId = params.userId;
  const showActiveUsers = searchParam.get('filter') === 'active';
  return (
    <div
      style={{
        position: "absolute",
        top: "70px",
        left: 0,
        right: "0",
        zIndex: -1,
      }}
    >
      Details About User {userId}
      <div>
        <button onClick={()=> setSearchParam({filter:'active'})}>Active Users</button>
        <button onClick={()=> setSearchParam({})}>Reset Filter</button>
      </div>
      {
        showActiveUsers ? <p>Showing Active Users</p> : <p>Show All Users</p>
      }
    </div>
  );
};

export default UserDetails;
