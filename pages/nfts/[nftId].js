import Header from '../../components/Header/Header'
import { useEffect, useMemo, useState } from 'react'
import { useWeb3 } from '@3rdweb/hooks'
import { ThirdwebSDK } from '@3rdweb/sdk'
import { useRouter } from 'next/router'
// import NFTImage from '../../components/nft/NFTImage'
// import GeneralDetails from '../../components/nft/GeneralDetails'
// import ItemActivity from '../../components/nft/ItemActivity'
// import Purchase from '../../components/nft/Purchase'

const style = {
  wrapper: `flex flex-col items-center container-lg text-[#e5e8eb]`,
  container: `container p-6`,
  topContent: `flex`,
  nftImgContainer: `flex-1 mr-4`,
  detailsContainer: `flex-[2] ml-4`
}

function Nft() {
  const router = useRouter()
  const { provider } = useWeb3()
  const [selectedNft, setSelectedNft] = useState()
  const [listings, setListings] = useState([])

  const nftModule = useMemo(() => {
    if (!provider) return

    const sdk = new ThirdwebSDK(provider.getSigner(), 'https://eth-rinkeby.alchemyapi.io/v2/psnFUS2-XcOSMR0_ed5tcj8RVjmpH9Rs')
    return sdk.getNFTModule('0x5268181d8615ec88318518927667ac6dC40Da3c7')
  }, [provider])

  useEffect(() => {
    if (!nftModule) return
    ;(async () => {
      const nfts = await nftModule.getAll()
      const selectedNftItem = nfts.find(nft => nft.id === router.query.nftId)
      setSelectedNft(selectedNftItem)
    })()
  }, [nftModule])

  const marketPlaceModule = useMemo(() => {
    if (!provider) return

    const sdk = new ThirdwebSDK(provider.getSigner(), 'https://eth-rinkeby.alchemyapi.io/v2/psnFUS2-XcOSMR0_ed5tcj8RVjmpH9Rs')

    return sdk.getMarketplaceModule('0x2E0F770000C9ED501bB206026280085A05ac797e')
  }, [provider])

  useEffect(() => {
    if (!marketPlaceModule) return
    ;(async () => {
      setListings(await marketPlaceModule.getAllListings())
    })()
  }, [marketPlaceModule])

  return (
    <>
      <Header />
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.topContent}>
            <div className={style.nftImgContainer}>
              {/* <NFTImage selectedNft={selectedNft} /> */}
            </div>
            <div className={style.detailsContainer}>
              {/* <GeneralDetails selectedNft={selectedNft} />
              <Purchase
                isListed={router.query.isListed}
                selectedNft={selectedNft}
                listings={listings}
                marketPlaceModule={marketPlaceModule}
              /> */}
            </div>
          </div>
          <ItemActivity />
        </div>
      </div>
    </div>
    </>
  )
}

export default Nft
