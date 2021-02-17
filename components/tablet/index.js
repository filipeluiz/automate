'use strict'

import React from 'react'
import ImportFile from '../ImportFile'
import readFile from '../helps/readFile'
import Table from './Table'
import useStyles from '../helps/useStyles'

const Tablet = () => {
  const classes = useStyles()
  return (
    <div className={classes.tableContainer}>
      <ImportFile 
        onChange = {(e) => readFile(e.target.files[0])} 
        onClick = {() => console.log('editando...')}
      />
      <Table />
    </div>
  )
}

export default Tablet
