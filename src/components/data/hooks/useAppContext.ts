import { useContext } from "react";
import AppContext from "../context/AppContext";

// O useContext vai retornar o object do context passado como parametro
export default function useAppContext() {
  return useContext(AppContext);
}
