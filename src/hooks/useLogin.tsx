import { useReducer, useState } from 'react'
import { FormState, FormValue, LoginAction, UseLogin } from '../model/interface'

const useLogin = (): UseLogin => {

    const initialForm = [
        { name: 'username', value: '', },
        { name: 'password', value: '', }
    ]

    const initialState: FormState = {
        errors: false,
        loading: false,
        loggedIn: false
    }

    const [values, setValues] = useState<FormValue[]>(initialForm)
    
    function loginReducer(state: FormState, action: LoginAction) {
        switch (action.type) {
            case 'login': {
                return {
                    ...state,
                    errors: false,
                    loading: true,
                }
            }
            case 'success': {
                return {
                    ...state,
                    loading: false,
                    loggedIn: true,
                }
            }
            case 'error': {
                return {
                    ...state,
                    errors: true,
                    loggedIn: false,
                }
            }
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(loginReducer, initialState);
    const { errors, loading, loggedIn } = state;


    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const forms = values.map(el => el.name === e.target.name ?
            { name: e.target.name, value: e.target.value } : el)
        setValues(forms)
    }

    const onSubmit = () => {
        dispatch({ type: 'login'});
        const ready = values.every(el => el.value !== '')
        if (ready) {
            dispatch({ type: 'success' });
            // setTimeout(() => { setLoading(false); setLoggedIn(true); }, 1500)
            // setValues(initialState)
        }
        else {
            dispatch({ type: 'error' });
        }
        return;
    }


    return [values, errors, loading, loggedIn, onChange, onSubmit]
}

export default useLogin
