//import styles from "../styles/*.module.css";

import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";

interface propsInt {}

export default function Autenticacao(props: propsInt) {
  const [modo, setModo] = useState<"login" | "cadastro">("login");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <div>
      <h1>Autenticacao</h1>
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
    </div>
  );
}
