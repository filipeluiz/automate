'use strict'

import React, { useState } from 'react'
import ImportFile from '../ImportFile'
import readFile from '../helps/readFile'
import Table from './Table'
import useStyles from '../helps/useStyles'
import { db } from '../helps/firebase'

const Tablet = () => {
  const [state, setState] = useState()
  const classes = useStyles()

  const date = (ano,semestre,discipline) => {
    let dates
    db.ref('estudantes').orderByChild(`anoLetivo/${ano}/${semestre}/${discipline}/codigo`).equalTo(discipline).once('value').then(snapshot => {
      const obj = snapshot.val()
      dates = Object.keys(obj).map(chave => obj[chave])
    })
    return dates
  }

  return (
    <div className={classes.tableContainer}>
      <ImportFile 
        onChange = {(e) => readFile(e.target.files[0], setState)} 
        onClick = {() => console.log(state)}
      />
      <Table />
    </div>
  )
}

export default Tablet
