import React from 'react'
import LoginForm from '../components/LoginForm'
import useLogin from '../hooks/useLogin'

const Login: React.FC = () => {
    const [
        values,
        errors,
        loading,
        loggedIn,
        onChange,
        onSubmit
    ] = useLogin() as any;

    return (
        <div>
            <LoginForm
                values={values}
                errors={errors}
                loading={loading}
                loggedIn={loggedIn}
                onChange={onChange}
                onSubmit={onSubmit}
            />
        </div>
    )
}

export default Login
