import "../styles/globals.css";
import "../../node_modules/tailwindcss/tailwind.css";
import { AppProvider } from "../components/data/context/AppContext";
import { AuthProvider } from "../components/data/context/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </AuthProvider>
  );
}

export default MyApp;
