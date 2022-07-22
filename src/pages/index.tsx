// import styles from "../styles/*.module.css";

import Layout from "../components/templates/Layout";

interface propsInt {}

export default function nome(props: propsInt) {
  return (
    <Layout
      titulo="Pagina inicial"
      subTitulo="Template admin"
      children={<h3>Conteudo</h3>}
    />
  );
}
