// import styles from "../styles/*.module.css";

import { Component, useEffect, useState } from "react";
import Image from "../../../node_modules/next/image";
import { useRouter } from "../../../node_modules/next/router";
import loading from "../../../public/images/loading-load.gif";
import useAuthContext from "../data/hooks/useAuth";

interface propsInt {
  children?: any;
}

export default function ForcarAutenticacao(props: propsInt) {
  const { usuario, carregando } = useAuthContext();

  const [router, setRouter] = useState(null);

  useEffect(() => setRouter(useRouter()), []);

  function renderizarConteudo() {
    return <>{props.children}</>;
  }
  function renderizarCarregando() {
    return (
      <div className="flex justify-center items-center h-screen">
        <Image src={loading} />
      </div>
    );
  }

  if (!carregando && usuario?.email) {
    return renderizarConteudo();
  } else if (carregando) {
    return renderizarCarregando();
  } else {
    router.push("/autenticacao");
    return null;
  }
}
