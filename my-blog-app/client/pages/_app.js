import { ContextProvider } from "@/contexts/ContextProvider";
import "@/styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}
export default App;
