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
    <div
      className="
    flex
    flex-col
    mt-4
    "
    >
      <label>{props.label}</label>
      <input
        type={props.tipo ?? "text"}
        value={props.valor}
        onChange={({ target }) => props.onChange(target.value)}
        required={props.obrigatorio}
        className="
        px-4 
        py-3
        rounded-lg
        mt-2
        border
        bg-gray-200
        focus:border-blue-500
        focus:outline-none
        focus:bg-white


        "
      />
    </div>
  );
}
