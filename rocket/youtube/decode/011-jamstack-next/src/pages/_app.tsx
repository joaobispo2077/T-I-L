import { Provider as UrqlProvider } from 'urql';
import { ssrCache, urqlClient } from '../lib/urql';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState);
  }

  return (
    <UrqlProvider value={urqlClient}>
      <Component {...pageProps} />
    </UrqlProvider>
  );
}

export default MyApp;
