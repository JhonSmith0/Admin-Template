import { createContext, useEffect, useState } from "react";

type Tema = "dark" | "";
interface AppContextProps {
  //   tema: "dark" | "";
  tema: Tema;
  alternarTema?: () => void;
}

const AppContext = createContext<AppContextProps>({
  tema: null,
});

// Provider - Onde os consumer buscam a informacao
// Consumer - Quem passa os dados do provider

export function AppProvider(props: any) {
  // Quando o setTema ser usado o provider e os dados vao ser atualizados
  const [tema, setTema] = useState<Tema>("");

  useEffect(() => {
    const salvo = window.localStorage.getItem("tema") ?? "";
    setTema(salvo);
  }, []);

  function alternarTema() {
    const novo = !tema ? "dark" : "";
    window.localStorage.setItem("tema", novo);
    setTema(novo);
  }

  // Todos os filhos do Provider vao ter acesso ao value atraves do consumer
  return (
    <AppContext.Provider value={{ tema, alternarTema }}>
      {props.children}
    </AppContext.Provider>
  );
}

// -------------------------
// PARA O CONSUMER OU O USECONTEXT FUNCIONAR O APPPROVIDER TEM Q SER O PAI DOS
// ELEMENTOS
// -------------------------

export default AppContext;
export const AppConsumer = AppContext.Consumer;

// ex.:

// Acessando os dados com o AppConsumer
// export function Componente() {
//   return (
//     <AppConsumer>
//       {/* Quando o componente ser chamado o object do createContext vai ser colocado
//     no parametro data */}
//       {(data) => <h1>{data.nome}</h1>}
//     </AppConsumer>
//   );
// }

// Outra maneira de acessar os dados do context api é através do useContext
// (coloquei o exemplo nos hooks)
