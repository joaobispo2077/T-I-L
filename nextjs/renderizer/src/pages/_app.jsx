import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/GloblaStyles';
import { themes } from '../styles/themes/index';
import { AppProps } from 'next/app';

function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={themes['default']}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

App.propTypes = AppProps;
export default App;
