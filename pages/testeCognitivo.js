'use strict'

import React from 'react'
import Layout from '../components/layout'
import Tablet from '../components/tablet'

const TesteCognitivo = () => {
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

export default TesteCognitivo
