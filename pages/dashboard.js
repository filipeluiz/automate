'use strict'

import React from 'react'
import Image from 'next/image'
import Layout from '../components/layout'
import useStyles from '../components/helps/useStyles'

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Layout 
      titleHead='Dashboard'
      Contents={
        <div className={classes.containerDashboard}>
          <h1>Bem vindo Automate</h1>
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

export default Dashboard