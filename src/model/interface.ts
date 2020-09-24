export  interface FormValue {
  value: string;
  name: string;
}

export type UseLogin = [
  FormValue[],
  boolean,
  boolean,
  boolean,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  () => void
];

export interface FormState {
        values?: FormValue[],
        errors: boolean,
        loading: boolean,
        loggedIn: boolean,
        onChange?:(e: React.ChangeEvent<HTMLInputElement>) => void,
        onSubmit?:() => void, 
}

export type LoginAction = 
 | {type : "login" }
 | {type : "success"}
 | {type : "error"}

