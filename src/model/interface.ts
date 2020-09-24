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
        values: FormValue[],
        errors: boolean,
        loading: boolean,
        loggedIn: boolean,
        onChange:(e: React.ChangeEvent<HTMLInputElement>) => void,
        onSubmit:() => void, 
}

export default interface LoginState {
  type: "login" | "loading" | "success" | "error";
}
