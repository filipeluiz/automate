'use strict'

import React from 'react'
import Fab from '@material-ui/core/Fab'
import ArchiveIcon from '@material-ui/icons/Archive'
import EditIcon from '@material-ui/icons/Edit';
import useStyles from './helps/useStyles'

const ImportFile = ({onChange, editClick}) => {
  const classes = useStyles()

  return (
    <div className={classes.rootMargin}>
      <label htmlFor="upload-xlsx">
        <input
          style={{ display: "none" }}
          id="upload-xlsx"
          name="upload-xlsx"
          type="file"          
          onChange={onChange}
          accept=".xls, .xlsx"
        />       
        <Fab size="small" color="primary" aria-label="add" component="span">
          <ArchiveIcon />       
        </Fab>      
      </label>
      <label htmlFor="edit">
        <Fab onClick={editClick} size="small" color="secondary" aria-label="edit">
          <EditIcon />
        </Fab>          
      </label>
    </div>    
  ) 
}

export default ImportFile
