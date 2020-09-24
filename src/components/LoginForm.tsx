import React from 'react'
import { FormState } from '../model/interface'

const LoginForm: React.FC<FormState> = (props) => {

    const { values, errors, loading, loggedIn, onChange, onSubmit } = props


    return (
        <div>
            {values && values.map((e, i) =>
                <div>
                    {e.name}<br />
                    <label key={i}>
                        <input value={e.value} name={e.name} onChange={onChange} />
                    </label>
                    <br />
                </div>
            )}
            <br /><br />
            {errors ? <p>please check username or password</p> : null}
            {loading ? <div className="loader"></div> : null}
            {loggedIn ? <p>Login success</p> : null}
            <button type="submit" onClick={onSubmit}>Login</button>
        </div>
    )
}
export default LoginForm
