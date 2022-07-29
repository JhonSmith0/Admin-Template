// import styles from "../styles/*.module.css";

import MenuLateral from "./MenuLateral";
import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import useAppContext from "../data/hooks/useAppContext";
import ForcarAutenticacao from "../auth/ForcarAutenticacao";
import useAuthContext from "../data/hooks/useAuth";
import Router from "../../../node_modules/next/router";
import { useEffect, useState } from "react";
import forcarAutenticacao from "../../functions/forcarAutenticacao";

interface propsInt {
  titulo: string;
  subTitulo: string;
  children?: any;
}

export default function Layout(props: propsInt) {
  const { tema } = useAppContext();

  return (
    <ForcarAutenticacao key={tema}>
      <div className={`${tema} flex h-screen w-screen`}>
        <MenuLateral />
        <div className="flex flex-col w-full p-7 bg-gray-300 dark:bg-gray-900 ">
          <Cabecalho titulo={props.titulo} subTitulo={props.subTitulo} />
          <Conteudo>{props.children}</Conteudo>
        </div>
      </div>
    </ForcarAutenticacao>
  );
}
