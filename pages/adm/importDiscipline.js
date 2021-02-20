'use strict'

import React, { useState } from 'react'
import Layout from '../../components/layout'
import ImportFile from '../../components/ImportFile'
import readFile from '../../components/helps/readFile'
import useStyles from '../../components/helps/useStyles'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import { modelDisciplinas } from '../../components/modelDate'
import { db } from '../../components/helps/firebase'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const importDiscipline = () => {
  const classes = useStyles()
  const [state, setState] = useState([])
  const [open, setOpen] = useState(false)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }  

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
                  db.ref('estudantes').child(arrayState[i].Matricula).child('anoLetivo').child(arrayState[i].Ano).child(arrayState[i].Semestre).child(arrayState[i].Disciplina.match(/^\w{5}-\d{2}/)[0]).update(modelDisciplinas(state[i]))
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

export default importDiscipline
