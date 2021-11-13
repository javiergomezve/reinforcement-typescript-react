const Functions = () => {
    const sum = (a: number, b: number): number => {
        return a + b;
    };

    return (
        <div>
            <h3>Functions</h3>

            <p>{sum(1, 2)}</p>
        </div>
    );
};

export default Functions;
