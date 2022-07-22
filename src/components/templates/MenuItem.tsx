//import styles from "../styles/*.module.css";

interface propsInt {
  url: string;
  texto: string;
  icon: any;
}

export default function nome(props: propsInt) {
  return <li>{props.icon}</li>;
}
