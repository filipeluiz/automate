'use strict'

import React, { useState } from 'react'
import MaterialTable from 'material-table'
import tableIcons from './tableIcon'
import useStyles from '../helps/useStyles' 

const Table = (date) => {
  const [state, setState] = useState({
    fileName: '',
    data: {date},
    isLoading: false
  })

  const classes = useStyles()

  return (
    <div className = {classes.tableInner}>
      <MaterialTable 
        icons = {tableIcons}
        columns = {[
          { title: 'Semestre', field: 'Semestre', type: 'numeric', align: 'center', cellStyle: {width: 10}, sorting: false },
          { title: 'Codigo', field: 'Codigo', type: 'numeric', align: 'center', cellStyle: {width: 5}, sorting: false },
          { title: 'Disciplina', field: 'Disciplina', align: 'center', cellStyle: {width: 20}, sorting: false },
          { title: 'Turma', field: 'Turma', align: 'center', cellStyle: {width: 20} },
          { title: 'Matricula', field: 'Matricula', type: 'numeric', align: 'center', cellStyle: {width: 20} },
          { title: 'Nome', field: 'Nome', align: 'center', cellStyle: {width: 880} },
          { title: 'Nota', field: 'Nota', type: 'numeric', align: 'center', cellStyle: {width: 10} }
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
