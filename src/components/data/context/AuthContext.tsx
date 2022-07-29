import { createContext, useEffect, useState } from "react";
import Router from "../../../../node_modules/next/router";

import Cookies from "../../../../node_modules/js-cookie/index";

import firebase from "../../../firebase/index";
import Usuario from "../../../model/Usuario";

interface AuthContextProps {
  usuario?: Usuario;
  loginGoogle?: () => Promise<void>;
  login?: (email: string, senha: string) => Promise<void>;
  cadastrar?: (email: string, senha: string) => Promise<void>;
  logout?: () => Promise<void>;
  carregando?: boolean;
}

function gerenciarCookie(logado: boolean) {
  if (logado) {
    Cookies.set("admin-template-coder-auth", logado, {
      expires: 7,
    });
  } else {
    Cookies.remove("admin-template-coder-auth");
  }
}

const AuthContext = createContext<AuthContextProps>({});

async function usuarioNormalizado(
  usuarioFireBase: firebase.User
): Promise<Usuario> {
  const token = await usuarioFireBase.getIdToken();

  return {
    uid: usuarioFireBase.uid,
    nome: usuarioFireBase.displayName,
    email: usuarioFireBase.email,
    token,
    provedor: usuarioFireBase.providerData[0].providerId,
    imageUrl: usuarioFireBase.photoURL,
  };
}

export function AuthProvider(props: any) {
  const [carregando, setCarregando] = useState<boolean>(false);
  const [usuario, setUsuario] = useState<Usuario>(null);

  useEffect(() => {
    if (Cookies.get("admin-template-coder-auth") && !usuario) {
      const cancelar = firebase.auth().onIdTokenChanged(configurarSessao);
      return () => cancelar();
    }
  }, [usuario]);

  async function configurarSessao(usuarioFireBase: any) {
    if (usuarioFireBase?.email) {
      setUsuario(await usuarioNormalizado(usuarioFireBase));
      gerenciarCookie(true);
    } else {
      setUsuario(null);
      gerenciarCookie(false);
    }
    setCarregando(false);
  }

  async function login(email: string, senha: string) {
    try {
      setCarregando(true);
      const resp = await firebase
        .auth()
        .signInWithEmailAndPassword(email, senha);

      await configurarSessao(resp.user);
      Router.push("/");
    } catch (e) {
      console.log(e);
    } finally {
      setCarregando(false);
    }
  }
  async function cadastrar(email: string, senha: string) {
    try {
      setCarregando(true);
      const resp = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, senha);

      await configurarSessao(resp.user);
      Router.push("/");
    } finally {
      setCarregando(false);
    }
  }

  async function loginGoogle() {
    try {
      setCarregando(true);
      const resp = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider());

      await configurarSessao(resp.user);
      Router.push("/");
    } finally {
      setCarregando(false);
    }
  }

  async function logout() {
    try {
      setCarregando(true);
      await firebase.auth().signOut();
      await configurarSessao(false);
    } catch (e) {
    } finally {
      setCarregando(false);
      Router.push("/autenticacao");
    }
  }

  return (
    <AuthContext.Provider
      value={{
        usuario,
        loginGoogle,
        login,
        cadastrar,
        logout,
        carregando,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
