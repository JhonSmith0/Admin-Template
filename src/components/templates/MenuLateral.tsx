import styles from "../styles/*.module.css";
import MenuItem from "./MenuItem";
import Logo from "./Logo";

import { adjustments, bell, homeIcon, exit } from "../icons/index";

interface propsInt {}

export default function MenuLateral() {
  return (
    <aside
      className="flex flex-col
    dark:bg-gray-900
    "
    >
      <div
        className="
      flex flex-col items-center justify-center
      bg-gradient-to-r from-indigo-500  to-purple-800 h-20 w-20"
      >
        <Logo />
      </div>
      <ul className="flex-grow">
        <MenuItem icon={homeIcon} url="/" texto="Home" />
        <MenuItem icon={adjustments} url="/ajustes" texto="Ajustes" />
        <MenuItem icon={bell} url="/notificacoes" texto="Notificacoes" />
      </ul>
      <ul>
        <MenuItem
          icon={exit}
          texto="Sair"
          onClick={(e) => console.log("teste")}
          className="
          text-red-600
          dark:hover:bg-red-400
          hover:bg-red-400
          hover:text-white"
        />
      </ul>
    </aside>
  );
}
