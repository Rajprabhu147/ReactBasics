import React, { useEffect, useState } from "react";

const Hook = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component did Mount now");
    const timerId = setInterval(() => {
      console.log("Component Did Update");
    }, 1000);
    return () => {
      console.log("Component will Unmount");
      clearInterval(timerId);
    };
  }, [count]);
  return (
    <div>
      <h2>3. LifeCycle Methods is done by "useEffect Hooks"</h2>
      <p>
        useEffect allows you to perform task like{" "}
        <strong>fetching data, directly updating DOM and timers</strong>
      </p>
      <h5>a. Component did Mount</h5>
      <p>
        As soon as the page renders component gets mounted, it shows in the
        console{" "}
      </p>
      <h5>b. Component did Update</h5>
      <p>Shows in the console after button Click </p>
      <button onClick={() => setCount(count + 1)}>Update using useState</button>
      <h5>c. Component will unMount</h5>
      <p>Shows in the console as the component will unMount now</p>
    </div>
  );
};

export default Hook;
