// import styles from "../styles/*.module.css";

import { Component, useEffect, useState } from "react";
import Head from "../../node_modules/next/head";
import Image from "../../node_modules/next/image";
import Router from "../../node_modules/next/router";
import Script from "../../node_modules/next/script";
import loading from "../../public/images/loading-load.gif";
import useAuthContext from "../components/data/hooks/useAuth";

interface propsInt {
  children?: any;
}

export default function forcarAutenticacao(jsx: any) {
  const { usuario, carregando } = useAuthContext();

  function renderizarConteudo() {
    return (
      <>
        <Head>
          <Script
            dangerouslySetInnerHTML={{
              __html: `
              if (!document.cookie.includes("admin-template-coder-auth")) {
                window.location.href = "/autenticacao";
              }`,
            }}
          ></Script>
        </Head>
        {jsx}
      </>
    );
  }
  function renderizarCarregando() {
    return (
      <div className="flex justify-center items-center h-screen">
        <Image src={loading} alt="" />
      </div>
    );
  }

  const [html, setHtml] = useState(null);

  useEffect(() => {
    // if (usuario?.email && !carregando) {
    //   setHtml(renderizarConteudo());
    // } else if (carregando) {
    //   setHtml(renderizarCarregando());
    // } else {
    //   Router.push("/autenticacao");
    // }

    if (document.cookie.includes("admin-template-coder-auth")) {
      setHtml(renderizarConteudo());
    } else if (carregando) {
      setHtml(renderizarCarregando());
    } else {
      Router.push("/autenticacao");
    }
  }, []);
  return html;
}
