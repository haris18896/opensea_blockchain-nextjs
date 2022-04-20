# OpenSea - BlockChain Web 3.0 App - with Next.js | Sanity.io | thirdweb 

```bash
npx create-next-app --example with-tailwindcss ./
```
# Next.js + Tailwind CSS Example

This example shows how to use [Tailwind CSS](https://tailwindcss.com/) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3) with Next.js. It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs).

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) or preview live with [StackBlitz](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-tailwindcss)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss&project-name=with-tailwindcss&repository-name=with-tailwindcss)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-tailwindcss with-tailwindcss-app
# or
yarn create next-app --example with-tailwindcss with-tailwindcss-app
# or
pnpm create next-app -- --example with-tailwindcss with-tailwindcss-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).


---
---
---

## `Start Server`
enter `npm run dev` in terminal to start the server.


```tsx
// pages/index.tsx
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <>
     <h2>Hello</h2>
    </>
  )
}

export default Home

```

## `Sanity.io`

the next thing we are going to do is to create a sanity.io project. we are going setup our database with sanity.

```bash
npm install -g @sanity/cli
sanity init --coupon cleverprogrammer
```

sanity init --coupon cleverprogrammer
* `sanity init` will create a new project in the current directory. so we have to make a directory called `studio`, change directory to `studio` and make a sanity there `.
* when you hit enter, `sanity init` it will start asking you some questions.
  * ? Project name: opensea-blockchain
  * ? Use the default dataset configuration? (Y/n) y
  * ✔ Creating dataset
  * ? Project output path: (E:\Codes\1 - Other\opensea_blockchain-nextjs\studio) ====> < (hit enter) >
  * ? Select project template > Clean project with no predefined schemas
  * 

* remove `/` from node_modules in `.gitignore` so that it will ignore both root directory node_modules and the `studio` directory node_modules.
* now you can write schema of database in `studio/schemas/schema.js`

```js
// schemas/schema.js
// schema will look like this we are going to create a schema for our project.
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
  ]),
})
```

```js
// schema/schema.js
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
      {
      name: 'users',
      title: 'Users',
      type: 'document',
      fields: [
        {
          name: 'userName',
          title: 'User Name',
          type: 'string'
        },
        {
          name: 'walletAddress',
          title: 'Wallet Address',
          type: 'string'
        },
        {
          name: 'profileImage',
          title: 'Profile Image',
          type: 'image'
        },
        {
          name: 'bannerImage',
          title: 'Banner Image',
          type: 'image'
        },
        {
          name: 'twitterHandle',
          title: 'Twitter Handle',
          type: 'string'
        },
        {
          name: 'igHandle',
          title: 'Instagram Handle',
          type: 'string'
        }
      ]
    },
    {
      name: 'marketItems',
      title: 'Market Items',
      type: 'document',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string'
        },
        {
          name: 'contractAddress',
          title: 'Contract Address',
          type: 'string'
        },
        {
          name: 'description',
          title: 'Description',
          type: 'string'
        },
        {
          name: 'createdBy',
          title: 'Created By',
          type: 'reference',
          to: [{ type: 'users' }]
        },
        {
          name: 'volumeTraded',
          title: 'Volume Traded',
          type: 'number'
        },
        {
          name: 'floorPrice',
          title: 'Floor Price',
          type: 'number'
        },
        {
          name: 'owners',
          title: 'Owners',
          type: 'array',
          of: [{ type: 'reference', to: [{ type: 'users' }] }]
        },
        {
          name: 'profileImage',
          title: 'Profile Image',
          type: 'image'
        },
        {
          name: 'bannerImage',
          title: 'Banner Image',
          type: 'image'
        }
      ]
    }
  ]),
})
```

 # steps:
    * create a next js project
    * install sanity cli
    * create a studio directory for sanity
    * 