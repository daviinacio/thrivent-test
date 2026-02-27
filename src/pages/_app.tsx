import { GlobalStylesheet } from "@/styles/global";
import { LightTheme } from "@/styles/theme";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={LightTheme}>
        <GlobalStylesheet />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
