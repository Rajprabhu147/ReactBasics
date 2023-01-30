import React, { useState } from 'react';

export default function StateFunction() {
  //useState Declaration
  const [show, setShow] = useState(true);
  const [state, setState] = useState({
    degree: "Interactive Web Media",
    exp: "5 years",
  });

  //event handling function
  const updateState = () => {
    setState((previousState) => {
      return {
        ...previousState,
        exp: "4 years",
      };
    });
  };

  return (
    <div>
        { show && 
          <div>
            <h2>
              2. State declaration is done by "useState
              Hooks"
            </h2>
            <p>
              State in this component are Raj's Education is{" "}
              <strong>{state.degree}</strong> and his experience is{" "}
              <strong>{state.exp}</strong>
            </p>
            <p>
              State can be updated using the Event handling Callback function and {" "}
              <strong>setState</strong>
            </p>
            <button
              onClick={() =>
                setState({ degree: "Computer Engineer", exp: "4 years" })
              }
            >
              Change the whole State
            </button>
            <p>
              But if you try to update just one data it overwrites the whole state{" "}
            </p>
            <button onClick={() => setState({ exp: "4 years" })}>
              Change State without Spread
            </button>
            <p>
              So the best Practice is to use <strong>Spread operator </strong>
            </p>
            <button onClick={updateState}>Change State with Spread</button>
          </div>
        }
        <br />
        <button onClick={() => setShow(!show)} > Open / Close useState Hooks</button>
</div>
  )
}
