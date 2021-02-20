'use strict'

import React from 'react'
import MaterialTable from 'material-table'
import tableIcons from './tableIcon'
import useStyles from '../helps/useStyles' 

const Table = () => {
  const classes = useStyles()

  return (
    <div className = {classes.tableInner}>
      <MaterialTable 
        icons = {tableIcons}
        columns = {[
          { title: "Adı", field: "name" },
          { title: "Soyadı", field: "surname" },
          { title: "Doğum Yılı", field: "birthYear", type: "numeric" },
          {
            title: "Doğum Yeri",
            field: "birthCity",
            lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
          },
        ]}
        data={[
          {
            name: "Mehmet",
            surname: "Baran",
            birthYear: 1987,
            birthCity: 63,
          },
        ]}
        title="Demo Title"
      />
    </div>
  )
}

export default Table
