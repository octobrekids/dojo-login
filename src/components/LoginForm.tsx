import React from 'react'
import { FormValue } from '../hooks/useLogin'

const LoginForm: React.FC<{
    values: FormValue[],
    errors: boolean,
    loading: boolean,
    loggedIn: boolean,
    onChange:(e: React.ChangeEvent<HTMLInputElement>) => void,
    onSubmit:() => void,
    }> = (props) => {

        const {errors,loading,loggedIn,onChange,onSubmit} = props
    
    return (
        <div>
            <label>Username</label><br />
            <input type="text" id="username" name="username" onChange={onChange}/><br />
            <label>Password</label><br />
            <input type="text" id="password" name="password" onChange={onChange}/><br /><br />
            {errors ? <p>please check username or password</p> : null}
            {loading ? <div className="loader"></div> : null}
            {loggedIn ? <p>Login success</p> : null}
            <button type="submit" onClick={onSubmit}>Login</button>
        </div>
    )
}
export default LoginForm
