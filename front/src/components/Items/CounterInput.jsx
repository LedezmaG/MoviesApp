import React, { useState } from 'react'

export const CounterInput = ({value, count, setCount}) => {

    const [counter, setCounter] = useState(0)

    const handelPlus = () =>{ 
        setCounter( counter + 1 )
        setCount({...count, [value]: counter + 1 })
    }
    const handelMinus = () => {
        if (counter <= 0) {
            setCounter( counter - 1 )
            setCount({...count, [value]: counter - 1 })
        } else {
            setCounter( 0 )
            setCount({...count, [value]: 0 })
        }
    }
    
    return (
        <div className="btn-group" role="group" aria-label="Basic example">
            <button 
                type="button" 
                className="btn btn-green cw-50"
                onClick={handelMinus}
            >
                <i class="fa-solid fa-minus"/>
            </button>
            <input 
                type="number" 
                className="form-control cw-50 text-center" 
                placeholder="0" 
                value={counter}
                onChange={({target})=>setCounter(target.value)}
            />
            <button 
                type="button" 
                className="btn btn-green cw-50"
                onClick={handelPlus}
            >
                <i class="fa-solid fa-plus"/>
            </button>
        </div>
    )
}
