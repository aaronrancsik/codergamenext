// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


import type { NextApiRequest, NextApiResponse } from 'next'
import Appwrite from 'node-appwrite'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import { initAppwrite } from '../../lib/appwrite'

type Data = {
  data: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let sdk = initAppwrite()
  let database = new Appwrite.Databases(
    sdk, 
    process.env.APPWRITE_DATABASE_ID as string
  )

  try {
     let promise = await database.createDocument(
        process.env.APPWRITE_COLLECTION_ID as string,
        uuidv4(),
        {
          name: "yay",
          code: "hello",
        }
      )
      console.log(promise)
    res.status(200).json({ data: 'OK' })
  } catch (e) {
    console.log(e)
    res.status(500).json({ data: 'NOT OK' })
  }
}