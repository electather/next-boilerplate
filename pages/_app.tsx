import { AppProps } from 'next/app';
import '@/styles/global.css';
import { appWithTranslation } from 'next-i18next';

function WebApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(WebApp);
