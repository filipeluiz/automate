'use strict'

import React, { useEffect } from 'react'
import nookies from 'nookies'
import { verifyIdToken } from '../server/firebaseAdmin'
import { firebaseClient } from '../server/firebase'
import Image from 'next/image'
import Layout from '../components/layout'
import useStyles from '../components/helps/useStyles'

export default function Dashboard({session}){
  const classes = useStyles();

  useEffect(() => {
    firebaseClient()
  }, [])

  if(session) {
    return (
      <Layout 
        titleHead='Dashboard'
        Contents={
          <div className={classes.containerDashboard}>
            <h1>Bem vindo {session}</h1>
            <Image 
              src='/logomarca.png' 
              alt='logomarca Automate' 
              width={432}
              height={98}
            />
          </div>
        }
      />
    )
  }
  else {
    return (
      <h1>Loading...</h1>
    )
  }
}

export async function getServerSideProps(context) {
  try {
    const cookies = nookies.get(context)
    const token = await verifyIdToken(cookies.token)
    const { uid, email }  = token

    return  {
      props: { session: email }
    }
  }
  catch(err) {
    context.res.writeHead(302, {location: "/login"})
    context.res.end()
    return { props: [] }
  }
}
