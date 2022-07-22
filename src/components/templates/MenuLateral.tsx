import styles from "../styles/*.module.css";
import MenuItem from "./MenuItem";

import { bell, cog, homeIcon } from "../icons/index";

interface propsInt {}

export default function MenuLateral() {
  return (
    <aside>
      <ul>
        <MenuItem icon={homeIcon} url="/" texto="Home" />
        <MenuItem icon={cog} url="/" texto="Ajustes" />
        <MenuItem icon={bell} url="/" texto="Novidades" />
      </ul>
    </aside>
  );
}
