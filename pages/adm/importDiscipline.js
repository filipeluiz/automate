'use strict'

import React, { useState } from 'react'
import Layout from '../../components/layout'
import ImportFile from '../../components/ImportFile'
import readFile from '../../components/helps/readFile'
import useStyles from '../../components/helps/useStyles'

const importDiscipline = () => {
  const classes = useStyles()
  const [state, setState] = useState([])

  return (
    <Layout 
      titleHead = 'Importar disciplinas'
      Contents = {
        <>
          <ImportFile 
            onChange = { e => readFile(e.target.files[0], setState)}
            onClickSave = { () => console.log('Salvou!')}
          />
        </>
      }
    />
  )

}

export default importDiscipline