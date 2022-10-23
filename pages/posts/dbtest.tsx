
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'

import Appwrite from 'node-appwrite'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import { client } from '../../lib/appwriteConfig'
import React from 'react'

const addLine =async () => {
    console.log('yay');
}

const Dbtest: NextPage = () => {

  const [data, setData]:any = React.useState(null);
  const [isLoading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true)
    fetch('/api/profile-data')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>
  return (
    <div>
      <button onClick={addLine}>Yay</button>
      <h1>{data.hello}</h1>
    </div>
  )
}



export default Dbtest