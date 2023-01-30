import React, { useState, createContext, useContext } from "react";
import GetName from "./GetName";
import DisplayName from "./DisplayName";
import SecondDisplay from "./SecondDisplay";

export const Context = createContext(null);
export const UserContext = createContext();

const UseContext = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState("RajPrabhu");
  const [close, setClose] = useState(true);

  return (
    <div>
      {close && (
        <div>
          <h2>5. useContext Hooks is used to eliminate Prop Drilling</h2>
          <p>
            React Context is a way to manage <strong>state globally</strong>.
          </p>
          <p>
            It can be used together with the <strong>useState</strong> Hook to
            share state between deeply nested components more easily than with{" "}
            <strong>useState</strong> alone.
          </p>
          <p>
            To do this without <strong>Context</strong>, we will need to{" "}
            <strong>pass the state as "props"</strong> through each nested
            component. This is called <strong>"prop drilling"</strong>.
          </p>
          <br />
          <Context.Provider value={{ name, setName }}>
            <GetName />
            <br />
            <DisplayName />
            <br />
            <SecondDisplay />
            <br />
          </Context.Provider>

          <UserContext.Provider value={user}>
            <h2>UserContext {`Hello ${user}!`}</h2>
            <UseContext2 />
          </UserContext.Provider>
        </div>
      )}
      <br />
      <button onClick={() => setClose(!close)}>
        Open / Close useContext Hooks
      </button>
    </div>
  );
};
export default UseContext;

export const UseContext2 = () => {
  return (
    <div>
      <h3>UserContext2</h3>
      <UseContext3 />
    </div>
  );
};

export const UseContext3 = () => {
  return (
    <div>
      <h3>UserContext3</h3>
      <UseContext4 />
    </div>
  );
};

export const UseContext4 = () => {
  return (
    <div>
      <h3>UserContext4</h3>
      <UseContext5 />
    </div>
  );
};

export const UseContext5 = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <h3>UseContext5{` Hello ${user} again!`}</h3>
    </div>
  );
};
