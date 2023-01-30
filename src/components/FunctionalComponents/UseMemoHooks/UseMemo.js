import React, { useState, useMemo, useEffect } from "react";

function slowFunction(num) {
  for (let i = 0; i <= 1000; i++) {}
  return num * 2;
}

const UseMemo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const [close, setClose] = useState(true);

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);
  useEffect(() => {
    console.log("Theme Changed");
  }, [themeStyles]);

  return (
    <div>
      {close && 
      <div>
        <h2>8. useMemo Hooks returns memoized value</h2>
        <p>
          Think of <strong>memoization</strong> as caching a value so that it{" "}
          <strong>does not need</strong> to be <strong>recalculated</strong>.
          The useMemo Hook <strong>only runs</strong> when one of its
          dependencies <strong>update</strong>.
        </p>
        <p>
          The <strong>useMemo and useCallback</strong> Hooks are{" "}
          <strong>similar</strong>. The main difference is that{" "}
          <strong>useMemo </strong>
          returns a <strong>memoized value</strong> and{" "}
          <strong>useCallback </strong> returns a{" "}
          <strong>memoized function.</strong>
        </p>
        <div>
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(parseInt(e.target.value))}
          />
          <button onClick={() => setDark((prevDark) => !prevDark)}>
            Change Theme
          </button>
          <div style={themeStyles}>{doubleNumber}</div>
        </div>
      </div>}
      <br />
      <button onClick={() => setClose(!close)}>Open / Close useMemo Hooks</button>
    </div>
  );
};

export default UseMemo;
