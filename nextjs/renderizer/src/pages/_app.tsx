import { ThemeProvider } from 'styled-components';
import GloblaStyles from '../styles/GloblaStyles';
import { themes } from '../styles/themes/index';
import { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={{ ...themes['default'] }}>
        <GloblaStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
