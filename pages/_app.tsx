import { FC } from 'react' 
import '../styles/globals.css'
import { AppProps } from 'next/app'

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}
export default MyApp
