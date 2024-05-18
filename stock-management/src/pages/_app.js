import { NextUIProvider } from '@nextui-org/react';
import '../styles/globals.css';
import '@nextui-org/react/dist/nextui.css'; // NextUI için stil dosyasını burada içe aktarıyoruz

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
