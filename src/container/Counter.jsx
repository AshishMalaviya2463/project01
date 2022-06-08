import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);

    const countIncrement = () => {
        if (count < 10) {
            setCount(count + 1);
        } else {
            return null;
        }
    }
    const countDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        } else {
            return null;
        }
    }
    return (
        <>
            <button onClick={() => { countIncrement() }}>+</button>
            <span>{count}</span>
            <button onClick={() => { countDecrement() }}>-</button>
        </>
    )
}
