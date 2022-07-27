import { createContext, useState } from "react";
import Router from "../../../../node_modules/next/router";

import firebase from "../../../firebase/index";
import Usuario from "../../../model/Usuario";

interface AuthContextProps {
  usuario?: Usuario;
  loginGoogle?: () => Promise<void>;
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
  const [usuario, setUsuario] = useState<Usuario>(null);

  console.log(usuario);

  async function loginGoogle() {
    console.log("Login google!");

    const resp = await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider());

    const usuario = await usuarioNormalizado(resp.user);
    setUsuario(usuario);

    console.log(usuario);
    Router.push("/");
  }

  return (
    <AuthContext.Provider
      value={{
        usuario,
        loginGoogle,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
