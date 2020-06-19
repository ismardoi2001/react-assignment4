import React ,{ useState } from 'react';
import { Message } from './Message.js';
import './App.css';
export default function App() {

let [count, setCount] = useState(1);
return(
  <div>
  <Message counter={count}/>
  <br />
  <button onClick={()=> setCount(count +1)}>
  Update Counter
  </button>
  </div>
)
};
