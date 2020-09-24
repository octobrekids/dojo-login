export default interface FormValue {
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

export default interface LoginState {
  type: "login" | "loading" | "success" | "error";
}
