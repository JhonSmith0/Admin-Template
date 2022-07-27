import Link from "../../../node_modules/next/link";
import useAuthContext from "../data/hooks/useAuth";

// import styles from "../styles/*.module.css";

interface propsInt {
  className?: string;
}

export default function AvatarUsuario(props: propsInt) {
  const { usuario } = useAuthContext();
  console.log(usuario, "hjk");
  return (
    <Link href="/perfil">
      <img
        src={usuario.imageUrl}
        alt="Foto do usuario"
        className={`w-10 h-10 rounded-full cursor-pointer ${props.className}`}
      />
    </Link>
  );
}
