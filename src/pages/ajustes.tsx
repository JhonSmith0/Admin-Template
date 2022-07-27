import Layout from "../components/templates/Layout";

//import styles from "../styles/*.module.css";

interface propsInt {}

export default function Ajustes(props: propsInt) {
  return (
    <Layout titulo="Configuracoes" subTitulo="Personalize o sistema por aqui">
      <h3 className="container">Conteudo</h3>
    </Layout>
  );
}
