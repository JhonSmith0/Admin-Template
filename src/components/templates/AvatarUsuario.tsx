import Image from "../../../node_modules/next/image";
import Link from "../../../node_modules/next/link";
import useAuthContext from "../data/hooks/useAuth";

// import styles from "../styles/*.module.css";

interface propsInt {
  className?: string;
}

export default function AvatarUsuario(props: propsInt) {
  const { usuario } = useAuthContext();
  return (
    <Link href="/perfil">
      <picture>
        <source src={usuario?.imageUrl ?? "/images/avatar.svg"} />
        <img
          src={usuario?.imageUrl ?? "/images/avatar.svg"}
          alt="Foto do usuario"
          className={`w-10 h-10 rounded-full cursor-pointer ${props.className}`}
        />
      </picture>
    </Link>
  );
}
