//import styles from "../styles/*.module.css";

interface propsInt {
  label: string;
  valor: any;
  obrigatorio?: boolean;
  tipo?: "text" | "email" | "password";
  onChange: (novo: any) => void;
  notRender?: boolean;
}

export default function AuthInput(props: propsInt) {
  return props.notRender ? null : (
    <div>
      <label>{props.label}</label>
      <input
        type={props.tipo ?? "text"}
        value={props.valor}
        onChange={({ target }) => props.onChange(target.value)}
        required={props.obrigatorio}
      />
    </div>
  );
}
