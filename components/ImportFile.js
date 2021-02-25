'use strict'

import React from 'react'
import Fab from '@material-ui/core/Fab'
import ArchiveIcon from '@material-ui/icons/Archive'
import PostAddIcon from '@material-ui/icons/PostAdd'
import SaveIcon from '@material-ui/icons/Save'
import useStyles from './helps/useStyles'

const ImportFile = ({onChange, onClick, onClickSave, Sucess}) => {
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
      {
      Sucess ? <label htmlFor="edit">
          <Fab className={classes.buttonClassname} onClick={onClick} size="small" aria-label="edit">
            <PostAddIcon />
          </Fab>          
        </label> : undefined
      }
      {
        onClickSave ? <label htmlFor="save">
          <Fab onClick={onClickSave} size="small" color="secondary" aria-label="save">
            <SaveIcon />
          </Fab>          
        </label> : undefined
      }      

    </div>    
  ) 
}

export default ImportFile
