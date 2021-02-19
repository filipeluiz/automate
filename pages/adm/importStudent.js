'use strict'

import React, { useState } from 'react'
import Layout from '../../components/layout'
import ImportFile from '../../components/ImportFile'
import readFile from '../../components/helps/readFile'
import { modelStudent } from '../../components/modelDate'
import ReactJson from 'react-json-view'
import useStyles from '../../components/helps/useStyles'
import { db } from '../../components/helps/firebase'

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


  return (
    <Layout 
      titleHead = 'Importar estudantes'
      Contents = {
        <>
          <ImportFile 
            onChange = { e => {
              return readFile(e.target.files[0], setState) 
            }}
            onClickSave = { () => {
              if(state.length){
                const estudantes = db.ref('estudantes')
                estudantes.set(state.map(e => modelStudent(e)))
                setOpen(true)
              }
              else {
                console.log('Não pode salvar, pois state está vazio')
              }
              
            }}
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
        </>
      }
    />
  )

}

export default importStudent