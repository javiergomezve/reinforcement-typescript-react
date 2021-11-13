const BasicTypes = () => {
    let name: string | number = 'Javier';
    const age = 32;
    const isActive: boolean = false;
    const powers: string[] = ['speed', 'fly', 'strong'];

    return (
        <div>
            <h3>Basic types</h3>
            <p>
                {name}, {age} | {isActive ? 'Activo' : 'inactivo'}
            </p>
            {powers.map((power, index) => (
                <p key={index}>{power}</p>
            ))}
        </div>
    );
};

export default BasicTypes;
