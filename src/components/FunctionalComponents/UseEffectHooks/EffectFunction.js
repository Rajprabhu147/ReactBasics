import React, {useState} from "react";
import Hook from "./Hook";

 const  EffectFunction = () => {
 const [toggle, setToggle] = useState(true);


  return (
    <div>
      { toggle && <Hook />}
      <br />
      <button onClick={() => setToggle(!toggle)} >Mount / unMount useEffect Hooks</button>
    </div>
  );
}

export default EffectFunction;