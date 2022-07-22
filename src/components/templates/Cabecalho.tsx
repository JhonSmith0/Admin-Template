//import styles from "../styles/*.module.css";
import Titulo from "./Titulo";

interface propsInt {
  titulo: string;
  subTitulo: string;
}

export default function Cabecalho(props: propsInt) {
  return (
    <div>
      <Titulo {...props} />
    </div>
  );
}
