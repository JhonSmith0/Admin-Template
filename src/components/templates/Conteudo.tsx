//import styles from "../styles/*.module.css";

interface propsInt {
  children?: any;
}

export default function Conteudo(props: propsInt) {
  return (
    <div className="flex flex-col mt-7 dark:text-gray-200">
      {props.children}
    </div>
  );
}
