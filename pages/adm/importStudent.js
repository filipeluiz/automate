'use strict'

import React, { useState, useEffect } from 'react'
import nookies from 'nookies'
import { verifyIdToken } from '../../server/firebaseAdmin'
import { firebaseClient } from '../../server/firebase'
import Layout from '../../components/layout'
import ImportFile from '../../components/ImportFile'
import readFile from '../../components/helps/readFile'
import { modelStudent } from '../../components/modelDate'
import ReactJson from 'react-json-view'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import useStyles from '../../components/helps/useStyles'
import { db } from '../../server/firebase'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const importStudent = ({session}) => {
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

  const handleSave = () => {
    if(state.length){
      const arrayState = state.map(e => modelStudent(e))
      const student = db.ref('estudantes')
      for(let i = 0; i < arrayState.length; i++) {
        student.child(arrayState[i].matricula).update(arrayState[i])
      }
      setOpen(true)
    }
    else {
      console.log('Não pode salvar, pois state está vazio')
    }
  }

  if(session){
    return (
      <Layout 
        titleHead = 'Importar estudantes'
        Contents = {
          <>
            <ImportFile 
              onChange = { e => {
                return readFile(e.target.files[0], setState) 
              }}
              onClickSave = {handleSave}
            />
            <div className={classes.reactJSON}>
              {
                state.length ? <ReactJson 
                  src={state.map(e => modelStudent(e))} 
                  theme="bright:inverted"
                  iconStyle="circle"
                  displayDataTypes={false}
                  enableClipboard={false}
                /> : undefined
              }
            </div>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
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

export default importStudent
