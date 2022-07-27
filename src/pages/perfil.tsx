// import styles from "../styles/*.module.css";

import Layout from "../components/templates/Layout";

interface propsInt {}

export default function PaginaPerfil(props: propsInt) {
  return (
    <Layout titulo="Pagina usuario" subTitulo="Administre a pagina do usuario">
      <h1>Perfil do usuario</h1>
    </Layout>
  );
}
