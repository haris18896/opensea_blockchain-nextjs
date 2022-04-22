# OpenSea - BlockChain Web 3.0 App - with Next.js | Sanity.io | thirdweb 
now working with collections page

```js
// pages/collection/[collectionId].js
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import { useWeb3 } from '@3rdweb/hooks'

const style = {
  bannerImageContainer: `h-[20vh] w-screen overflow-hidden flex justify-center items-center`,
  bannerImage: `w-full object-cover`,
  infoContainer: `w-screen px-4`,
  midRow: `w-full flex justify-center text-white`,
  endRow: `w-full flex justify-end text-white`,
  profileImg: `w-40 h-40 object-cover rounded-full border-2 border-[#202225] mt-[-4rem]`,
  socialIconsContainer: `flex text-3xl mb-[-2rem]`,
  socialIconsWrapper: `w-44`,
  socialIconsContent: `flex container justify-between text-[1.4rem] border-2 rounded-lg px-2`,
  socialIcon: `my-2`,
  divider: `border-r-2`,
  title: `text-5xl font-bold mb-4`,
  createdBy: `text-lg mb-4`,
  statsContainer: `w-[44vw] flex justify-between py-4 border border-[#151b22] rounded-xl mb-4`,
  collectionStat: `w-1/4`,
  statValue: `text-3xl font-bold w-full flex items-center justify-center`,
  ethLogo: `h-6 mr-2`,
  statName: `text-lg w-full text-center mt-1`,
  description: `text-[#8a939b] text-xl w-max-1/4 flex-wrap mt-4`
}
function Collection() {
  const router = useRouter()
  const { provider } = useWeb3()
  const { collectionId } = router.query
  const { collection, setCollection } = useState({})
  const { nfts, setNfts } = useState([])
  const [listings, setListings] = useState([])

  return (
    <div>
      <Link href='/'>
        <h2>{router.query.collectionId}</h2>
      </Link>
    </div>
  )
}

export default Collection

```

before continuing we have to set `infura link`, actually go the `alchemy api` [alchemy](https://www.alchemy.com/),

in `Alchemy` => create app (enter Team name, app name. network = `rinkeby`) this is only for the first time you create the app,

* after that when everything is finished and you are logged in then, create App => (enter app name, description, chain, network = `rinkeby`)
* click on the created app => click on view key => copy (HTTP) key
* [key](https://eth-rinkeby.alchemyapi.io/v2/psnFUS2-XcOSMR0_ed5tcj8RVjmpH9Rs)

* go to the [infura](https://infura.io/dashboard) sign in => go to the project settings => change the endpoint to `rinkeby` [api](https://rinkeby.infura.io/v3/a559755863e64c1581872be99e6d9782),


```js
const query = `*[_type == 'marketItems' && contractAddress == '${collectionId}'] {
  {
    "imageUrl": profileImage.asset->url,
        "bannerImageUrl": bannerImage.asset->url,
        volumeTraded,
        createdBy,
        contractAddress,
        "creator": createdBy->userName,
        title, floorPrice,
        "allOwners": owners[]->,
        description
  }`
```

 # steps:
    * create a new app on Alchemy
    *  @3rdweb/sdk
    *  at payment time you will encounter an error while buying NFT's for that
       *  1. upgrade your packages `npm upgrade --lates`
       *  2. delete all the alchemy or infura links e.g `'https://eth-rinkeby.alchemyapi.io/v2/psnFUS2-XcOSMR0_ed5tcj8RVjmpH9Rs'` from everywhere

