'use strict'

import React, { useState, useRef, useEffect } from 'react'
import ImportFile from '../ImportFile'
import MaterialTable from 'material-table'
import tableIcons from './tableIcon'
import useStyles from '../helps/useStyles'
import downloadCsv from '../helps/downloadCSV'
import { db } from '../../server/firebase'
import readTesteCognitivo from '../helps/readTesteCognitivo'

const Tablet = () => {
  const [state, setState] = useState()
  const [dateFirebase, setDateFirebase] = useState()
  const [fileName, setFileName] = useState()
  const [loading, setLoading] = useState()
  const tableRef = useRef();
  const classes = useStyles()
  const estudantes = db.ref('estudantes')

  useEffect(() => {
    if(!localStorage.getItem('dadosFPS')) {
      estudantes.once('value').then(snapshot => {
        const obj = snapshot.val()
        const dates = Object.keys(obj).map(chave => obj[chave])
        setDateFirebase(dates)
        localStorage.setItem('dadosFPS', JSON.stringify(dates))
      })
    }
    else {
      setDateFirebase(JSON.parse(localStorage.getItem('dadosFPS')))
    }
  }, [])
 
  return (
    <div className={classes.tableContainer}>
      <ImportFile 
        onChange = {(event) => {
          setLoading(true)
          readTesteCognitivo(event.target.files[0], setState, dateFirebase, setLoading)
          setFileName(event.target.files[0].name)
        }} 
      />
      <div className = {classes.tableInner}>
        <MaterialTable
          tableRef={tableRef}
          icons = {tableIcons}
          isLoading={loading}
          columns = {[
            { title: 'Semestre', field: 'Semestre', type: 'numeric', align: 'center', cellStyle: {width: 10}, sorting: false },
            { title: 'Codigo', field: 'Codigo', type: 'numeric', align: 'center', cellStyle: {width: 5}, sorting: false },
            { title: 'Disciplina', field: 'Disciplina', align: 'center', cellStyle: {width: 20}, sorting: false },
            { title: 'Turma', field: 'Turma', align: 'center', cellStyle: {width: 20} },
            { title: 'Matricula', field: 'Matricula', type: 'numeric', align: 'center', cellStyle: {width: 20} },
            { title: 'Nome', field: 'Nome', align: 'center', cellStyle: {width: 880} },
            { title: 'Nota', field: 'Nota', type: 'numeric', align: 'center', cellStyle: {width: 20} }
          ]}
          data={state}
          title={state ?  fileName.match(/^\w+-\d+\s-\s*\w*\s*\w*\s*\w*\s*\w*\s*\w*\s*\w*\s*\w*\s*\w*\s*\w*\s*\w*\s*\w*\s*\w*\s*\w*/gm).toString() : '' }
          options={{pageSize: 15, pageSizeOptions: [15,30,50,75,85], exportButton: true, exportDelimiter: ';', sorting: true, draggable: false,
            exportCsv: (columns, data) => {
              const headerRow = ['Periodo', 'Cod_Curso', 'Cod_Disciplina', 'Cod_Turma', 'Matricula', 'Nome', 'Nota']             

              const dataRows = data.map(({ tableData: undefined, ...row }) => Object.values(row));

              const { exportDelimiter } = tableRef.current.props.options;
              const delimiter = exportDelimiter ? exportDelimiter : ",";
              const csvContent = [headerRow, ...dataRows].map(e => e.join(delimiter)).join("\n");

              const csvFileName = tableRef.current.props.title;

              downloadCsv(csvContent, csvFileName);
            }        
          }}
        />
      </div>
    </div>
  )
}

export default Tablet
