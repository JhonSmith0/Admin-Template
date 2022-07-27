//import styles from "../styles/*.module.css";

interface propsInt {}

export default function Logo(props: propsInt) {
  return (
    <div
      className="
      flex flex-col
  bg-white
  h-10 w-10
  rounded-full
  items-center justify-center
  "
    >
      <div className="h-3 w-3 rounded-full bg-red-600 mb-0.5"></div>
      <div className="flex gap-1">
        <div className="h-3 w-3 rounded-full bg-green-600 "></div>
        <div className="h-3 w-3 rounded-full bg-yellow-400 "></div>
      </div>
    </div>
  );
}
