'use strict'

import React, { useState, useEffect } from 'react'
import nookies from 'nookies'
import { verifyIdToken } from '../../server/firebaseAdmin'
import { firebaseClient } from '../../server/firebase'
import Layout from '../../components/layout'
import ImportFile from '../../components/ImportFile'
import readFile from '../../components/helps/readFile'
import useStyles from '../../components/helps/useStyles'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import { modelDisciplinas } from '../../components/modelDate'
import { db } from '../../server/firebase'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const importDiscipline = ({session}) => {
  const classes = useStyles()
  const [state, setState] = useState([])
  const [open, setOpen] = useState(false)

  useEffect(() => {
    firebaseClient()
  }, [])

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }  

  if(session) {
    return (
      <Layout 
        titleHead = 'Importar disciplinas'
        Contents = {
          <>
            <ImportFile 
              onChange = { e => {
                readFile(e.target.files[0], setState)
              }}
              onClickSave = { () => {
                if(state.length){
                  const arrayState = state
                  for(let i = 0; i < arrayState.length; i++) {
                    db.ref('estudantes').child(arrayState[i].matricula).child('anoLetivo').child(arrayState[i].ano).child(arrayState[i].semestre).child(arrayState[i].disciplina.match(/^\w+-\d+/g)[0]).update(modelDisciplinas(state[i]))
                  }
                  setOpen(true)
                }
                else {
                  console.log('Não pode salvar, pois state está vazio')
                }              
              }}
            />
            <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success">
                Salvou com sucesso!
              </Alert>
            </Snackbar>           
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

export default importDiscipline
