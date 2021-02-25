'use strict'

import React, { useEffect } from 'react'
import nookies from 'nookies'
import { verifyIdToken } from '../server/firebaseAdmin'
import { firebaseClient } from '../server/firebase'
import Layout from '../components/layout'
import Tablet from '../components/tablet'

const TesteCognitivo = ({session}) => {

  useEffect(() => {
    firebaseClient()
  }, [])

  if(session) {
    return (
      <Layout 
        titleHead='Teste Cognitivo'
        Contents={
          <>
            <Tablet />
          </>
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


export default TesteCognitivo
