import React, { useContext } from 'react';
import { Context } from './UseContext';

const GetName = () => {
  const { setName } = useContext(Context)
  return (
    <div>
      <h3>Parent Component</h3>
      <h3>Global State : <input type="text" placeholder="Enter Name.."
      onChange={e => setName(e.target.value)} />
</h3>
    </div>
  )
}

export default GetName