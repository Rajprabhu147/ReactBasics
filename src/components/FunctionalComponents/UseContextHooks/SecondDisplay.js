import React, { useContext } from 'react';
import { Context } from './UseContext';

const SecondDisplay = () => {
    const { name } = useContext(Context);
  return (
    <div>
        <h3>GrandChild Component</h3>
        <h4>Name : {name} </h4>
    </div>
  )
}

export default SecondDisplay