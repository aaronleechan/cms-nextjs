import '../styles/globals.css';
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from '@mui/styles';

const theme = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
};

export default function MyApp({ 
  Component, 
  pageProps:{ session, ...pageProps},
}: any){
  return(
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  )
}
