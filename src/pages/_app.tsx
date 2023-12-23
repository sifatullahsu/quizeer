import { alegreya, rajdhani, roboto } from '@/fonts'
import { store } from '@/redux/store'
import '@/styles/globals.css'
import { AppPropsWithLayout, iChildren } from '@/types'
import { SessionProvider, useSession } from 'next-auth/react'
import { SnackbarProvider } from 'notistack'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const { session, ...otherProps } = pageProps
  const getLayout = Component.getLayout ?? (page => page)

  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Auth>
          <style jsx global>{`
            :root {
              --font-roboto: ${roboto.style.fontFamily};
              --font-alegreya: ${alegreya.style.fontFamily};
              --font-rajdhani: ${rajdhani.style.fontFamily};
            }
          `}</style>
          {getLayout(<Component {...otherProps} />)}
          <SnackbarProvider maxSnack={2} autoHideDuration={1000} />
        </Auth>
      </Provider>
    </SessionProvider>
  )
}

function Auth({ children }: iChildren) {
  const { status } = useSession()

  if (status === 'loading') {
    return <div></div>
  }

  return children
}
