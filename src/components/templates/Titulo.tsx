//import styles from "../styles/*.module.css";

interface propsInt {
  titulo: string;
  subTitulo: string;
}

export default function Titulo(props: propsInt) {
  return (
    <div>
      <h1 className={``}>{props.titulo}</h1>
      <h2 className={``}>{props.subTitulo}</h2>
    </div>
  );
}
