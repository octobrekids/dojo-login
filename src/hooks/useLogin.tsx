import { useState } from 'react'
import { FormValue, UseLogin } from '../model/interface'

const useLogin = (): UseLogin => {

    const initialState = [
        { name: 'username', value: '', },
        { name: 'password', value: '', }
    ]

    const [values, setValues] = useState<FormValue[]>(initialState)
    const [errors, setErrors] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [loggedIn, setLoggedIn] = useState<boolean>(false)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // setValues({...values, [e.target.name]:e.target.value})
        const forms = values.map(el => el.name === e.target.name ?
            { name: e.target.name, value: e.target.value } : el)
        setValues(forms)
    }

    const onSubmit = () => {
        const ready = values.every(el => el.value !== '')
        if (ready) {
            setErrors(false)
            setLoading(true)
            setTimeout(() => { setLoading(false); setLoggedIn(true); }, 1500)
            setValues(initialState)
        }
        else {
            console.log('no')
            setErrors(true)
        }
        return;
    }

    return [values, errors, loading, loggedIn, onChange, onSubmit]
}

export default useLogin
