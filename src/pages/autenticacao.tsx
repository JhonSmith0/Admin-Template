//import styles from "../styles/*.module.css";

import { useEffect, useState } from "react";
import Image from "../../node_modules/next/image";
import Router from "../../node_modules/next/router";
import AuthInput from "../components/auth/AuthInput";
import useAuthContext from "../components/data/hooks/useAuth";
import { warning } from "../components/icons/index";

interface propsInt {}

export default function Autenticacao(props: propsInt) {
  const [erro, setErro] = useState(null);
  const [modo, setModo] = useState<"login" | "cadastro">("login");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const { usuario, loginGoogle, login, cadastrar, carregando } =
    useAuthContext();
  useEffect(() => {
    if (usuario) Router.push("/");
  }, [usuario]);

  async function submeter() {
    try {
      if (modo === "login") await login(email, senha);
      else await cadastrar(email, senha);
    } catch (error) {
      exibirErro(error?.message ?? "Ocorreu um erro inesperado!", 5);
    }
  }

  function exibirErro(msg: string, tempoS = 5) {
    setErro(msg);
    setTimeout(setErro.bind({}, null), tempoS * 1000);
  }

  if (usuario) Router.push("/");

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="hidden md:block w-1/2 lg:w-2/3">
        <picture>
          <source src="https://source.unsplash.com/random" />
          <img
            src="https://source.unsplash.com/random"
            alt="Imagem da tela de autenticacao"
            className="
          
          h-screen
          w-full
          object-cover
          "
          />
        </picture>
      </div>
      <div className="m-10 md:w-1/2 w-full lg:w-1/3">
        <h1 className="text-3xl font-bold mb-5">
          {modo === "login"
            ? "Entre com a sua conta"
            : "Cadastre-se na Plataforma"}
        </h1>

        {erro && (
          <div
            className="bg-red-400 text-white py-3 px-5 my-2
          flex
          items-center

        border
        border-red-700
        rounded-lg
        "
          >
            {warning(6)}
            <span className="ml-3 text-sm">{erro}</span>
          </div>
        )}
        <AuthInput
          label="Email"
          tipo="email"
          valor={email}
          onChange={setEmail}
          obrigatorio
        />
        <AuthInput
          label="Senha"
          tipo="password"
          valor={senha}
          onChange={setSenha}
          obrigatorio
        />
        <button
          onClick={submeter}
          className="
      
      w-full
      bg-indigo-500
      hover:bg-indigo-400
      text-white
      rounded-lg
      mt-6
      px-4
      py-3
      
      "
        >
          {modo === "login" ? "Entrar" : "Cadastrar"}
        </button>

        <hr className="my-6 border-gray-300 w-full" />

        <button
          onClick={loginGoogle}
          className="
      
      w-full
      bg-red-500
      hover:bg-red-400
      text-white
      rounded-lg
      px-4
      py-3
      
      "
        >
          Entrar com google
        </button>

        {modo === "login" ? (
          <p className="mt-8">
            Novo por aqui?
            <a
              onClick={() => setModo("cadastro")}
              className="
            text-blue-500
            hover:text-blue-700
            font-semibold
            cursor-pointer
            
            "
            >
              {" "}
              Crie uma conta gratuitamente
            </a>
          </p>
        ) : (
          <p className="mt-8">
            Já faz parte da nossa comunidade?
            <a
              onClick={() => setModo("login")}
              className="
            text-blue-500
            hover:text-blue-700
            font-semibold
            cursor-pointer
            
            "
            >
              {" "}
              Entre com suas credenciais
            </a>
          </p>
        )}
      </div>
    </div>
  );
}
