'use strict'

import React from 'react'
import Fab from '@material-ui/core/Fab'
import clsx from 'clsx'
import ArchiveIcon from '@material-ui/icons/Archive'
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import useStyles from './helps/useStyles'

const ImportFile = ({onChange, onClick, onClickSave}) => {
  const classes = useStyles()

  return (
    <div className={classes.rootMargin}>
      {onChange? <label htmlFor="upload-xlsx">
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
      </label> : undefined}
      {onClick? <label htmlFor="edit">
        <Fab onClick={onClick} size="small" color="secondary" aria-label="edit">
          <EditIcon />
        </Fab>          
      </label> : undefined}
      {onClickSave? <label htmlFor="save">
        <Fab onClick={onClickSave} size="small" aria-label="save">
          <SaveIcon />
        </Fab>          
      </label> : undefined}      

    </div>    
  ) 
}

export default ImportFile
