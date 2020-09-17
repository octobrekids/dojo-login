import React, { useReducer, useState } from 'react'

type FormValue = {
    value: string,
    name: string
}

type UseLogin = [
    FormValue[],
    boolean,
    boolean,
    (e: React.ChangeEvent<HTMLInputElement>) => void,
    (e: React.FormEvent) => void
]

// type LoginAction =
// | { type: 'login' | 'success' | 'error' }
// | { type: 'field'; name:string; value:string;};


// const loginReducer = (state: UseLogin, action: LoginAction) => {
//     switch (action.type) {

//         case 'field' : {
//             return{
//                 ...state,
//                 [action.name] : action.value
//             }
//         }

//         case 'login': {
//             return {
//                 ...state,
//                 errors: '',
//                 loading: true,
//             }
//         }

//         case 'success': {
//             return {
//                 ...state,
//                 loading: false
//             }
//         }

//         case 'error': {
//             return {
//                 ...state,
//                 errors: 'Incorrect username or password',
//                 loading: false,
//             }
//         }

//         default:
//             return state;
//     }
// }

const useLogin = (): UseLogin => {

    const [values, setValues] = useState<FormValue[]>([])
    const [errors, setErrors] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    // const [state, dispatch] = useReducer(loginReducer, initialState);
    // const {  values,
    //     onChange,
    //     loading,
    //     errors,
    //     onSubmit } = state;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values,[e.target.name]: e.target.value})
        console.log(e.target.value)
        return;
    }

    
    const onSubmit =  (e: React.FormEvent) => {
        e.preventDefault();

        // dispatch({ type: 'login' })

        // if(username&&password)
        // {
        //     dispatch({ type: 'success' })
        // }
        // else{
        //     dispatch({ type: 'error' })
        // }

        const ready = values.every(e => e.value !== '')
        if(ready)
       {
           
        console.log('yes')
        setLoading(true);
        setTimeout( function(){  setLoading(false);}, 3000);
        setErrors(false);
       }
       else {
        console.log('no')
        setErrors(true);
       }
    }

    return [values,errors,loading, onChange, onSubmit]
    // return [values,errors,loading, onChange, () => onSubmit()]
}

export default useLogin
