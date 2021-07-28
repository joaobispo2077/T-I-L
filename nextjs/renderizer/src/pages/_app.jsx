import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/global';
import { theme } from '../styles/theme';
import { AppProps } from 'next/app';

function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

App.propTypes = AppProps;
export default App;
