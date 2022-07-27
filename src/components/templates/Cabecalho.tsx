//import styles from "../styles/*.module.css";
import useAppContext from "../data/hooks/useAppContext";
import BotaoAlternarTema from "./BotaoAlternarTema";
import Titulo from "./Titulo";

interface propsInt {
  titulo: string;
  subTitulo: string;
}

export default function Cabecalho(props: propsInt) {
  const { tema, alternarTema } = useAppContext();
  return (
    <div className="flex">
      <Titulo {...props} />
      <div className="flex flex-grow justify-end">
        <BotaoAlternarTema tema={tema} alternarTema={alternarTema} />
      </div>
    </div>
  );
}
