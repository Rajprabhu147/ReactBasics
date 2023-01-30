import React, {useState} from 'react'

const Props = (props) => {
const [close, setClose] = useState(true);
  return (
    <div>
      {close && <div>
            <h2>1. Props are arguments passed into React components - "props.name"</h2>
            <p>The props in this component is <strong>{props.location}</strong></p>
        </div>
      }    
      <br />
      <button onClick={() => setClose(!close)} >Open / Close Props</button>
      <br />
    </div>
  )
}

export default Props