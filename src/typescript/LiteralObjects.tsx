import React from 'react';

interface Address {
    country: string;
    city: string;
}

interface Person {
    name: string;
    age: number;
    address: Address;
}

const LiteralObjects = () => {
    const person: Person = {
        name: 'Javier',
        age: 32,
        address: {
            country: 'Colombia',
            city: 'Bogota',
        },
    };

    return (
        <div>
            <h3>Literal Objects</h3>

            <code>
                <pre>{JSON.stringify(person, null, 2)}</pre>
            </code>
        </div>
    );
};

export default LiteralObjects;
