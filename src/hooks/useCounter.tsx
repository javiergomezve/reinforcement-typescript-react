import { useState } from 'react';

const useCounter = (initialValue: number = 0) => {
    const [counter, setCounter] = useState<number>(initialValue);

    const accumulator = (value: number): void => {
        setCounter(value + counter);
    };

    return {
        counter,
        accumulator,
    };
};

export default useCounter;
