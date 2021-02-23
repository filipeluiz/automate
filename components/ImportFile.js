'use strict'

import React from 'react'
import Fab from '@material-ui/core/Fab'
import ArchiveIcon from '@material-ui/icons/Archive'
import PostAddIcon from '@material-ui/icons/PostAdd'
import EditIcon from '@material-ui/icons/Edit'
import useStyles from './helps/useStyles'

const ImportFile = ({onChange, onClick, onClickEdit, Sucess, Edit}) => {
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
        Edit ? <label htmlFor="save">
          <Fab onClick={onClickEdit} size="small" color="secondary" aria-label="save">
            <EditIcon />
          </Fab>          
        </label> : undefined
      }      

    </div>    
  ) 
}

export default ImportFile
