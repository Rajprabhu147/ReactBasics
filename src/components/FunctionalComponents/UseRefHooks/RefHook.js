import React, { useState, useRef, useEffect } from "react";

const RefHook = () => {
  const colorPara = useRef(null); // colorPara = { current: null}
  const colors = [
    "#ff7f50",
    "#87cefa",
    "#da70d6",
    "#32cd32",
    "#6495ed",
    "#ff69b4",
    "#ba55d3",
    "#cd5c5c",
    "#ffa500",
    "#40e0d0",
  ];
  const selectedColor = useRef(null); // selectColor = { current: null}
  const selectedCustomColor = { current: null }; // user defined null variable
  const [close, setClose ] = useState(true);

  useEffect(() => {
    console.log(colorPara);
    console.log(colorPara.current);
  });
  useEffect(() => {
    console.log("statement executed for selectedColor useReff hook changes");
  }, [selectedColor]);

  useEffect(() => {
    console.log(
      "statement executed from useEffect hook for custom variable changes "
    );
  }, [selectedCustomColor]);

  const stylePara = () => {
    const randomColor = Math.floor(Math.random() * colors.length);
    colorPara.current.style.color = colors[randomColor];

    selectedColor.current = colors[randomColor];
    console.log("selected Color is", selectedColor.current);

    selectedCustomColor.current = colors[randomColor];
    console.log("custom variable color selection", selectedCustomColor.current);
  };
  return (
    <div>
        { close &&     
            <div>
            <h2>4. useRef Hooks !== useState Hooks they have different useCases </h2>
            <p ref={colorPara}>
                <strong>Primary useCase: </strong>
                it can gain direct access to the DOM elements and any changes to the
                attached dom elements do not result in re-renders
                <br />
                <strong>Secondary useCase: </strong>
                it acts a container to store mutable values in .current property
            </p>
            <button
                onClick={() => {
                stylePara();
                }}
            >
                Change Color using useRef Hooks
            </button>
            </div>
        }
        <br />
    <button onClick={() => setClose(!close)} >Open / Close useRef Hooks</button>
    </div>
  );
};

export default RefHook;
