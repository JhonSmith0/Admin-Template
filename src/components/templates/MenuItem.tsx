//import styles from "../styles/*.module.css";

import Link from "../../../node_modules/next/link";

interface propsInt {
  url?: string;
  onClick?: (e: any) => void;
  className?: string;
  texto: string;
  icon: any;
}

export default function nome(props: propsInt) {
  function renderizarLink() {
    return (
      <a className="flex flex-col justify-center items-center h-20 w-full ">
        {props.icon}
        <span className="text-xs font-light">{props.texto}</span>
      </a>
    );
  }
  return (
    <li
      className={`hover:bg-gray-100 cursor-pointer dark:text-gray-200 text-gray-600 ${
        props.className ?? ""
      } 
      dark:hover:bg-gray-800
      dark:hover:text-white

      `}
      onClick={props.onClick}
    >
      {props.url ? (
        <Link href={props.url}>{renderizarLink()}</Link>
      ) : (
        renderizarLink()
      )}
    </li>
  );
}
