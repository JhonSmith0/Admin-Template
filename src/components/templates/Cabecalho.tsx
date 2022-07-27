//import styles from "../styles/*.module.css";
import useAppContext from "../data/hooks/useAppContext";
import BotaoAlternarTema from "./BotaoAlternarTema";
import Titulo from "./Titulo";

import Avatar from "./AvatarUsuario";

interface propsInt {
  titulo: string;
  subTitulo: string;
}

export default function Cabecalho(props: propsInt) {
  const { tema, alternarTema } = useAppContext();
  return (
    <div className="flex">
      <Titulo {...props} />
      <div className="flex flex-grow justify-end items-center">
        <BotaoAlternarTema tema={tema} alternarTema={alternarTema} />
        <Avatar className="ml-3 w-8 h-8" />
      </div>
    </div>
  );
}
