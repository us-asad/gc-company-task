import { Header, NavigationBar } from 'components'
import 'styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <main>
      <NavigationBar />
      <div className='ml-[320px] px-[100px] py-[37px]'>
        <Header />
        <Component {...pageProps} />
      </div>
    </main>
  )
}

export default MyApp
