import React from "react";
import Props from "./PropsMethod/Props";
import StateFunction from "./UseStateHooks/StateFunction";
import EffectFunction from "./UseEffectHooks/EffectFunction";
import RefHook from "./UseRefHooks/RefHook";
import UseContext from "./UseContextHooks/UseContext";
import UseReducer from "./UseReducerHooks/UseReducer";
import UseCallback from "./UseCallbackHooks/UseCallback";
import CustomHooks from "./CustomHooks/CustomHooks";
import UseMemo from "./UseMemoHooks/UseMemo";

export default function FunctionalComponents() {

  return (
    <div>
      <h1>Functional Components</h1>
      <Props location="Tamil Nadu" />
      <hr />
      <StateFunction />
     <hr />
      <EffectFunction />
      <hr />
      <RefHook />
      <hr />
      <UseContext />
      <hr />
      <UseReducer />
      <hr />
      <UseCallback />
      <hr />
      <UseMemo />
      <hr />
      <CustomHooks />
      <br />

    </div>
  );
}
