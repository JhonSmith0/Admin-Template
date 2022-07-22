// import styles from "../styles/*.module.css";

import MenuLateral from "./MenuLateral";
import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";

interface propsInt {
  titulo: string;
  subTitulo: string;
  children?: any;
}

export default function Layout(props: propsInt) {
  return (
    // Caso o dark esteja na classe todos os dark:* vao ser aplicados
    <div className="flex h-screen w-screen">
      <MenuLateral />
      <div className="flex flex-col w-full p-7 bg-gray-300 dark:bg-gray-900 ">
        <Cabecalho titulo={props.titulo} subTitulo={props.subTitulo} />
        <Conteudo children={props.children} />
      </div>
    </div>
  );
}