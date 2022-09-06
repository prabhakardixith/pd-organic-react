import { useState, useEffect } from "react";

import Get from "./crud/Get";
import Post from "./crud/Post";
function App() {
  const[url,setUrl] = useState("http://localhost:8080/user"); // "https://pd-organic.herokuapp.com/user"
  const [edit, setEdit] = useState();
  const [deleted, setDeleted] = useState();
  const [loading, setLoading] = useState(true);
 

  useEffect(() => {
    document.title = "User List";
  }, []);
  const [count, setCount] = useState();
  return (
    <div>
      {count ? (
        <h1>Total user count : {count}</h1>
      ) : (
        <h1>Total user count : </h1>
      )}
      <Get
        setCount={setCount}
        count={count}
        setEdit={setEdit}
        loading={loading}
        setLoading={setLoading}
        baseUrl={url}
      />
      {<Post baseUrl={url} setCount={setCount} edit={edit} setEdit={setEdit} />}
    </div>
  );
}

export default App;
