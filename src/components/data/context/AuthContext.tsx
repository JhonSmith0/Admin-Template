import { createContext, useEffect, useState } from "react";
import Router from "../../../../node_modules/next/router";

import Cookies from "../../../../node_modules/js-cookie/index";

import firebase from "../../../firebase/index";
import Usuario from "../../../model/Usuario";

interface AuthContextProps {
  usuario?: Usuario;
  loginGoogle?: () => Promise<void>;
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
    if (Cookies.get("admin-template-coder-auth")) {
      const cancelar = firebase.auth().onIdTokenChanged(configurarSessao);
      return () => cancelar();
    }
  }, []);

  async function configurarSessao(usuarioFireBase: any) {
    if (usuarioFireBase?.email) {
      setUsuario(await usuarioNormalizado(usuarioFireBase));
      gerenciarCookie(true);
      setCarregando(false);
      return usuarioFireBase.email;
    } else {
      setUsuario(null);
      gerenciarCookie(false);
      setCarregando(false);
      return false;
    }
  }

  async function loginGoogle() {
    try {
      setCarregando(true);
      const resp = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider());

      await configurarSessao(resp);
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
    } finally {
      setCarregando(false);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        usuario,
        loginGoogle,
        logout,
        carregando,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
