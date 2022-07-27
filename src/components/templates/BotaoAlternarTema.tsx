//import styles from "../styles/*.module.css";

import { sun, moon } from "../icons/index";

interface propsInt {
  tema: string;
  alternarTema?: () => void;
}

export default function BotaoAlternarTema(props: propsInt) {
  return props.tema === "dark" ? (
    <div
      onClick={props.alternarTema}
      className={`
      p-1
      rounded-full
      cursor-pointer
      hidden
      sm:flex
      w-14 
      lg:w-24 
      h-8
       items-center
    bg-gradient-to-r from-yellow-300 to bg-yellow-600 `}
    >
      <div
        className={`flex justify-center items-center bg-white text-yellow-600 w-6 h-6 rounded-full`}
      >
        {sun(4)}
      </div>
      <div className={`lg:flex items-center ml-4 hidden text-white`}>
        <span className="text-sm">Claro</span>
      </div>
    </div>
  ) : (
    <div
      onClick={props.alternarTema}
      className={`
      p-1
      rounded-full
      cursor-pointer
      hidden
      sm:flex
      w-14 
      lg:w-24 
      h-8
      justify-end
       items-center
    bg-gradient-to-r from-gray-500 to bg-gray-900 `}
    >
      <div className={`lg:flex items-center mr-2 hidden text-gray-300`}>
        <span className="text-sm">Escuro</span>
      </div>
      <div
        className={`flex justify-center items-center bg-black text-yellow-300 w-6 h-6 rounded-full`}
      >
        {moon(4)}
      </div>
    </div>
  );
}
