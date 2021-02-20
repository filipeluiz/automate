'use strict'

import React, { useState } from 'react'
import Layout from '../../components/layout'
import ImportFile from '../../components/ImportFile'
import readFile from '../../components/helps/readFile'
import { modelStudent } from '../../components/modelDate'
import ReactJson from 'react-json-view'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import useStyles from '../../components/helps/useStyles'
import { db } from '../../components/helps/firebase'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const importStudent = () => {
  const classes = useStyles()
  const [state, setState] = useState([])
  const [open, setOpen] = useState(false)

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

export default importStudent