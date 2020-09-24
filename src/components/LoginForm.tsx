import React from 'react'
import FormValue from '../model/interface'




const LoginForm: React.FC<{
    values: FormValue[],
    errors: boolean,
    loading: boolean,
    loggedIn: boolean,
    onChange:(e: React.ChangeEvent<HTMLInputElement>) => void,
    onSubmit:() => void,
    }> = (props) => {

        const {values,errors,loading,loggedIn,onChange,onSubmit} = props
        console.log(values)
    
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
