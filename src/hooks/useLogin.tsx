import { useState } from 'react'
import { FormValue, UseLogin } from '../model/interface'

const useLogin = (): UseLogin => {

    const [values, setValues] = useState<FormValue[]>([
        { name: 'username', value: '', },
        { name: 'password', value: '', }
    ])
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
        const array = Object.values(values)
        const ready = array[0] && array[1]
        if (ready) {
            setErrors(false)
            setLoading(true)
            setTimeout(() => { setLoading(false); setLoggedIn(true); }, 1500)
            setValues([])
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
