'use strict'

import admin from 'firebase-admin'
import serviceAccount from '../secret.json'

export const verifyIdToken = (token) => {
  if(!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
    })
  }

  return admin
  .auth()
  .verifyIdToken(token)
  .catch(error => {
    throw error
  })  
}