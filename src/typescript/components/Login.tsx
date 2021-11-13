import { useEffect, useReducer } from 'react';

interface AuthState {
    validating: boolean;
    token: string | null;
    username: string;
    name: string;
}

type LoginPayload = { username: string; name: string };

type AuthAction = { type: 'logout' } | { type: 'login'; payload: LoginPayload };

const initialState: AuthState = {
    validating: true,
    token: null,
    username: '',
    name: '',
};

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'logout':
            return {
                validating: false,
                token: null,
                name: '',
                username: '',
            };

        case 'login':
            const { name, username } = action.payload;
            return {
                validating: false,
                token: 'ABC123',
                name,
                username,
            };

        default:
            return state;
    }
};

const Login = () => {
    const [{ validating, token, name }, dispatch] = useReducer(
        authReducer,
        initialState
    );

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'logout' });
        }, 1500);
    }, []);

    const login = () => {
        dispatch({
            type: 'login',
            payload: {
                name: 'Javier',
                username: 'javiergomezve',
            },
        });
    };

    const logout = () => {
        dispatch({
            type: 'logout',
        });
    };

    if (validating) {
        return (
            <>
                <h3>Login</h3>

                <div className="alert alert-info">Validating...</div>
            </>
        );
    }

    return (
        <div>
            <h3>Login</h3>

            {token ? (
                <div className="alert alert-success">Authenticate {name}</div>
            ) : (
                <div className="alert alert-danger">Unauthenticated...</div>
            )}

            {token ? (
                <button className="btn btn-danger" onClick={logout}>
                    Logout
                </button>
            ) : (
                <button className="btn btn-primary" onClick={login}>
                    Login
                </button>
            )}
        </div>
    );
};

export default Login;
