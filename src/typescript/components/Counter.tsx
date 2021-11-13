import { useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState<number>(0);

    const increment = (value: number): void => {
        setCounter(value + counter);
    };

    return (
        <div>
            <h3>
                Counter: <span>{counter}</span>
            </h3>
            <button className="btn btn-primary" onClick={() => increment(1)}>
                +1
            </button>
            &nbsp;
            <button className="btn btn-secondary" onClick={() => increment(-1)}>
                -1
            </button>
        </div>
    );
};

export default Counter;
