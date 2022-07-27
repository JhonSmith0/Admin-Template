import { useContext } from "react";
import AuthContext from "../context/AuthContext";

// O useContext vai retornar o object do context passado como parametro
export default function useAuthContext() {
  return useContext(AuthContext);
}
