import { useState } from 'react'

export type FormValue = {
    value: string,
    name: string
}

type UseLogin = [
    FormValue[],
    boolean,
    boolean,
    boolean,
    (e: React.ChangeEvent<HTMLInputElement>) => void,
    () => void
]

const useLogin = (): UseLogin => {

    const [values, setValues] = useState<FormValue[]>([])
    const [errors, setErrors] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [loggedIn, setLoggedIn] = useState<boolean>(false)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('change')
        setValues({...values, [e.target.name]:e.target.value})
        return;
    }
    
    const onSubmit =  () => {
        const array = Object.values(values)
        const ready = array[0] && array[1]
        if(ready) 
        {
            setErrors(false)
            setLoading(true)
            setTimeout(() => {setLoading(false); setLoggedIn(true);},1500)
            setValues([])
        }
        else{
            console.log('no')
            setErrors(true)
        }
       return;
    }

    return [values,errors,loading,loggedIn,onChange, onSubmit]
}

export default useLogin
