import React, {useState} from "react";
import useFetch from "./useFetch";
import useLocalStorage from "./useLocalStorage";

const CustomHooks = () => {
  const [close, setClose] = useState(true);
  const [name, setName] = useLocalStorage('name', '');
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos")
  return (
    <div>
      {close && 
      <div>
        <h2>9. Custom Hooks start with "use". Example: useFetch.</h2>
          <p>
            Hooks are <strong>reusable</strong> functions. When you have{" "}
            <strong>component logic</strong> that needs to be used by multiple
            components, we can extract that logic to a{" "}
            <strong>custom Hook</strong>.
          </p>
          <input 
          type="text" 
          placeholder="Enter your word here"
          value={name} 
          onChange={e => setName(e.target.value)}
          />
          {data &&
            data.map((item) => {
              return <p key={item.id}>"{item.title}"</p>;
          })}  
      </div>}
      <br />
      <button onClick={() => setClose(!close)} >Open / Close Custom Hooks</button>
    </div>
  );
};

export default CustomHooks;
