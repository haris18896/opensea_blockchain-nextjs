import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

function Collection() {
  const router = useRouter()
  //   console.log(router.query.collectionId)

  return (
    <div>
      <Link href='/'>
        <h2>{router.query.collectionId}</h2>
      </Link>
    </div>
  )
}

export default Collection
