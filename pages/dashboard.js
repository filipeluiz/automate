'use strict'

import React from 'react'
import Image from 'next/image'
import Layout from '../components/layout'

const Dashboard = () => {
  return (
    <Layout 
      titleHead='Dashboard'
      Contents={
        <>
          <h1>Bem vindo Automate</h1>
          <Image 
            src='/logomarca.png' 
            alt='logomarca Automate' 
            width={432}
            height={98}
          />
        </>
      }
    />
  )
}

export default Dashboard