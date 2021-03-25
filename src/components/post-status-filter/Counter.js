import React, { useState } from "react";


function SomeComponent() {
  const [counter, setCounter] = useState(0);
  return (
  <div>
    {counter}
    <button onClick={() => setCounter((oldValue)=>oldValue + 1)}>change</button>
  </div>);
}
export default SomeComponent;