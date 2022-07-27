import "../styles/globals.css";
import "../../node_modules/tailwindcss/tailwind.css";
import { AppProvider } from "../components/data/context/AppContext";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
