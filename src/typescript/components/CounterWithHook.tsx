import useCounter from '../../hooks/useCounter';

const CounterWithHook = () => {
    const { counter, accumulator } = useCounter();

    return (
        <div>
            <h3>
                Counter with custom hook: <span>{counter}</span>
            </h3>
            <button className="btn btn-primary" onClick={() => accumulator(1)}>
                +1
            </button>
            &nbsp;
            <button
                className="btn btn-secondary"
                onClick={() => accumulator(-1)}
            >
                -1
            </button>
        </div>
    );
};

export default CounterWithHook;
