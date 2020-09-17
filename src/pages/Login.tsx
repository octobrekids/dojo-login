import React, { useEffect } from 'react'
import LoginForm from '../components/LoginForm'
import useLogin from '../hooks/useLogin'

const Login: React.FC = (props) => {
    const [
        values,
        onChange,
        loading,
        errors,
        onSubmit
    ] = useLogin() as any;

    useEffect(() => {
        console.log(values)
    }, [values])

    return (
        <div>
            <LoginForm
            values={values}
            errors={errors}
            loading={loading}
            onChange={onChange}
               onSubmit={onSubmit}
            />
        </div>
    )
}

export default Login
