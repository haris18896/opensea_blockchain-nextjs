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
