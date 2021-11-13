import { useState } from 'react';

export const useForm = <T extends Object>(form: T) => {
    const [state, setState] = useState(form);

    const handleChange = (field: keyof T, value: string) => {
        setState({
            ...state,
            [field]: value,
        });
    };

    return {
        ...state,
        form: state,
        handleChange,
    };
};
