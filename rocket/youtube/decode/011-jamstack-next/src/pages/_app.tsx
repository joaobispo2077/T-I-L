import { Provider as UrqlProvider } from 'urql';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ssrCache, urqlClient } from '../lib/urql';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState);
  }

  return (
    <UrqlProvider value={urqlClient}>
      <Header />
        <Component {...pageProps} />
      <Footer />
    </UrqlProvider>
  );
}

export default MyApp;
