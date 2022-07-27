//import styles from "../styles/*.module.css";

import useAppContext from "../data/hooks/useAppContext";

interface propsInt {
  titulo: string;
  subTitulo: string;
}

export default function Titulo(props: propsInt) {
  const data = useAppContext();
  return (
    <div>
      <h1 className={`font-black text-3xl text-gray-900 dark:text-gray-100`}>
        {props.titulo}
      </h1>
      <h2 className={`font-light text-sm text-gray-600 dark:text-gray-200`}>
        {props.subTitulo}
      </h2>
    </div>
  );
}
