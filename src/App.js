import { useState, useEffect } from "react";

import Get from "./crud/Get";
import Post from "./crud/Post";
function App() {
  const [edit, setEdit] = useState();
  const [deleted, setDeleted] = useState();
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState();

  useEffect(() => {
    document.title = "User List";
  }, []);

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
      />
      {<Post setCount={setCount} edit={edit} setEdit={setEdit} />}
    </div>
  );
}

export default App;
