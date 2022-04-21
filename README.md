# OpenSea - BlockChain Web 3.0 App - with Next.js | Sanity.io | thirdweb 
install thirdWeb in project `npm install @3rdweb/hooks`

in `pages/_app.tsx` import `import { ThirdwebWeb3Provider } from '@3rdweb/hooks'`

wrap your app with thirdApp provider


```js
//pages/_app.js
import '../styles/globals.css'
import { ThirdwebWeb3Provider } from '@3rdweb/hooks'

/**
 * the Chain 4 represent the Rinkeyby network
 * the 'injected' connectoris a web3 connection method used by Metamask
 */
const supportedChainIds = [4]
const connectors = {
  injected: {}
}
/**
 * Make sure that your app is wrapped with these contexts.
 * If you're using Next JS, you'll have to replace children with the Component setup
 */
function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebWeb3Provider supportedChainIds={supportedChainIds} connectors={connectors}>
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  )
}

export default MyApp

```

```js
//pages/index.js

import { useEffect } from 'react'
import Header from '../components/Header/Header'
import Hero from '../components/Hero'
import { useWeb3 } from '@3rdweb/hooks'
import { client } from '../lib/sanityClient'
import toast, { Toaster } from 'react-hot-toast'

const style = {
  wrapper: ``,
  walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen bg-[#3b3d42] `,
  button: `border border-[#282b2f] bg-[#2081e2] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black`,
  details: `text-lg text-center text=[#282b2f] font-semibold mt-4`
}

const Home = () => {
  const { address, connectWallet } = useWeb3()

  const welcomeUser = (userName, toastHandler = toast) => {
    toastHandler.success(`Welcome back${userName !== 'Unnamed' ? ` ${userName}` : ''}!`, {
      style: {
        background: '#04111d',
        color: '#fff'
      }
    })
  }

  useEffect(() => {
    if (!address) return // IIFE : Immediately Invoked Function Expression
    ;(async () => {
      const userDoc = {
        _type: 'users',
        _id: address,
        userName: 'Unnamed',
        walletAddress: address
      }

      const result = await client.createIfNotExists(userDoc)

      welcomeUser(result.userName)
    })()
  }, [address])

  return (
    <div className={style.wrapper}>
      <Toaster position='top-center' reverseOrder={false} />
      {address ? (
        <>
          <Header />
          <Hero />
        </>
      ) : (
        <div className={style.walletConnectWrapper}>
          <button className={style.button} onClick={() => connectWallet('injected')}>
            Connect Wallet
          </button>
          <div className={style.details}>
            You need chrome to be <br />
            able to run this app.
          </div>
        </div>
      )}
    </div>
  )
}

export default Home

```

we are saving the result of the user to sanity and for that we require sanity client `npm install @sanity/client`

```js
// lig/sanityClient.js
import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '3n3v373o', // you can find this at sanity.io in the project settings
  dataset: 'production',
  apiVersion: '2022-04-21',
  useCdn: false,
  // go to the sanity.io => api => CORS origins (add cross origin of website e.g http://localhost:3000, (allow credentials)) => tokens (add api token => Editor access, and name this token)
  token:
    'skugaJ8TRhu99x1RSBEyt2yTjC8qjNhZyXVY6759lD9wAqbRhQC2mrYezqMoYXyJ4htHfxPlrmvEZgYLJLzpAe7MzHujqiHp01793R6mguyoHaAcWJr8xeMGUn1PXv0diO4OynF8PTGrvKLfHtfDJtzgmkvikHkfaIjJBWGBojp3KIzJaokz'
})

```

 # steps:
    * install thirdWeb on site `npm install @3rdweb/hooks`
    * authenticate using Metamask and 3rdweb/hooks
    * check if the user exist then login, if not then register
    * `npm install @sanity/client` add sanity client to the lib directory

