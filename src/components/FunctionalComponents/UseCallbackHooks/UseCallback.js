import React, {useState, useCallback} from 'react';
import List from './List'; 


const UseCallback = () => {
    
    const [number, setNumber] = useState(1)
    const [dark, setDark] = useState(false);
    const [close, setClose] = useState(true);

const getItems = useCallback((incrementor) => {
    return [number + incrementor, number + 1 + incrementor, number + 2 + incrementor]
}, [number])

const theme = {
    backgroundColor: dark ? '#333' : '#FFF',
    color: dark ? '#FFF' : '#333',
}

  return (
    <div>
        {close && 
        <div>
            <h2>7. useCallback Hook returns a <strong>memoized callback function.</strong></h2>
            <p>Think of <strong>memoization</strong> as caching a value so that it does not need to be <strong>recalculated</strong>.</p>
            <p>This allows us to <strong>isolate resource intensive</strong> functions, so that they<strong> will not</strong> automatically <strong>run on every render. </strong></p>
            <p>The useCallback Hook <strong>only runs</strong> when one of its <strong>dependencies update.</strong> This can improve performance.</p>
            <p>One reason to use useCallback is to <strong>prevent</strong> a component from re-rendering <strong>unless its props have changed.</strong></p>

            <div style={theme}>
                <input 
                    type="number"
                    value={number}
                    onChange={e => setNumber(parseInt(e.target.value))}
                />
                <button onClick={() => setDark(prevDark => !prevDark)}>Toggle Theme</button>
                <List getItems={getItems} />
            </div>
        </div>}
        <br />
        <button onClick={() => setClose(!close)} >Open / Close useCallback Hooks</button>
    </div>
  )
}

export default UseCallback