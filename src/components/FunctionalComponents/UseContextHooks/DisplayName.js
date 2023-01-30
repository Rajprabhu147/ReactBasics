import React, { useContext } from 'react'
import { Context } from './UseContext';

const DisplayName = () => {
  const {name} = useContext(Context);

  return (
    <div>
      <h3>Child Component</h3>
      <h4>Name : {name} </h4>
    </div>
  )
}

export default DisplayName