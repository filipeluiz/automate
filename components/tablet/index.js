'use strict'

import React, { useState } from 'react'
import ImportFile from '../ImportFile'
import readFile from '../helps/readFile'
import Table from './Table'
import useStyles from '../helps/useStyles'

const Tablet = () => {
  const [state, setState] = useState()
  const classes = useStyles()
  { console.log(state) }
  return (
    <div className={classes.tableContainer}>
      <ImportFile 
        onChange = {(e) => readFile(e.target.files[0], setState)} 
        onClick = {() => console.log('editando...')}
      />
      <Table />
    </div>
  )
}

export default Tablet
