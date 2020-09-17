import React from 'react'
import { user } from '../pages/Login'
const LoginForm: React.FC<{
    values:user,
    onChange:(e: React.ChangeEvent<HTMLInputElement>) => void,
    onSubmit:(e: React.FormEvent<HTMLButtonElement>) => void,
    errors: boolean,
    loading: boolean,
    }> = (props) => {

        const {onChange,onSubmit,errors,loading} = props
    
    return (
        <div>
            
            <label>Username</label><br />
            <input type="text" id="username" name="username" onChange={onChange}/><br />
            <label>Password</label><br />
            <input type="text" id="password" name="password" onChange={onChange}/><br /><br />
            {errors ? <p>please check username or password</p> : null}
            {loading ? <div className="loader"></div> : null}
            <button type="submit" onClick={onSubmit} >Login</button>
        </div>
    )
}
export default LoginForm
