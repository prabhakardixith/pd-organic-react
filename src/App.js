import {useState,useEffect} from 'react'

import Get from './crud/Get';
import Post from './crud/Post';
function App() {

  const [count, setCount] = useState(0)
  return (
    <div>
      {<h1>Total user Count : {count}</h1>    }  
      <Get setCount={setCount} count={count}/>
      <Post setCount={setCount}/>
    </div>
  );
}

export default App;
