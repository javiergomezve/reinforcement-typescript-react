import { useForm } from '../../hooks/useForm';

const Form = () => {
    const { email, password, form, handleChange } = useForm({
        email: 'email@gmail.com',
        password: '123456',
    });

    return (
        <div>
            <h3>Form</h3>

            <input
                type="text"
                className="form-control my-3"
                placeholder="Email"
                name="email"
                value={email}
                onChange={({ target }) => handleChange('email', target.value)}
            />

            <input
                type="text"
                className="form-control my-3"
                placeholder="Password"
                name="password"
                value={password}
                onChange={({ target }) =>
                    handleChange('password', target.value)
                }
            />

            <code>
                <pre>{JSON.stringify(form)}</pre>
            </code>
        </div>
    );
};

export default Form;
