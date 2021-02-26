'use strict'

import admin from 'firebase-admin'

export const verifyIdToken = (token) => {
  if(!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert({
        type: process.env.NEXT_PUBLIC_SECRET_TYPE,
        project_id: process.env.NEXT_PUBLIC_SECRET_PROJECT_ID,
        private_key_id: process.env.NEXT_PUBLIC_SECRET_PRIVATE_KEY_ID,
        private_key: process.env.NEXT_PUBLIC_SECRET_PRIVATE_KEY,
        client_email: process.env.NEXT_PUBLIC_SECRET_CLIENT_EMAIL,
        client_id: process.env.NEXT_PUBLIC_SECRET_CLIENT_ID,
        auth_uri: process.env.NEXT_PUBLIC_SECRET_AUTH_URI,
        token_uri: process.env.NEXT_PUBLIC_SECRET_TOKEN_URI,
        auth_provider_x509_cert_url: process.env.NEXT_PUBLIC_SECRET_AUTH_PROVIDER_X509_CERT_URL,
        client_x509_cert_url: process.env.NEXT_PUBLIC_SECRET_CLIENT_X509_CERT_URL
      }),
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
