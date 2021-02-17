'use strict'

import React, { useState } from 'react'
import Layout from '../../components/layout'
import ImportFile from '../../components/ImportFile'
import readFile from '../../components/helps/readFile'
import { modelStudent } from '../../components/modelDate'
import ReactJson from 'react-json-view'
import useStyles from '../../components/helps/useStyles'

const importStudent = () => {
  const classes = useStyles()
  const [state, setState] = useState([])

  const iterage = () => {
    const test = state.map(e => modelStudent(e))
    return test
  }

  return (
    <Layout 
      titleHead = 'Importar estudantes'
      Contents = {
        <>
          <ImportFile 
            onChange = { e => readFile(e.target.files[0], setState)}
            onClickSave = { () => console.log('Salvou!')}
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