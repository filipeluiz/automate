'use strict'

import React, { useState, useRef, useEffect } from 'react'
import ImportFile from '../ImportFile'
import readFile from '../helps/readFile'
import MaterialTable from 'material-table'
import tableIcons from './tableIcon'
import useStyles from '../helps/useStyles'
import downloadCsv from '../helps/downloadCSV'
import { modelTesteCognitivo } from '../modelDate'
import { db } from '../helps/firebase'

const Tablet = () => {
  const [state, setState] = useState()
  const [stateStudent, setStudentState] = useState()
  const [dateFirebase, setDateFirebase] = useState()
  const [fileName, setFileName] = useState()
  const [sucess, setSucess] = useState(false)
  const tableRef = useRef();
  const classes = useStyles()
  const estudantes = db.ref('estudantes')

  useEffect(() => {
    async function fetchStudent() {
      await estudantes.once('value').then(snapshot => {
        const obj = snapshot.val()
        setDateFirebase(Object.keys(obj).map(chave => obj[chave]))
      })
    }

    fetchStudent()
  }, [])
 
  return (
    <div className={classes.tableContainer}>
      <ImportFile 
        onChange = {(event) => {
          readFile(event.target.files[0], setState)
          setFileName(event.target.files[0].name)
          setSucess(true)
        }} 
        onClick = {() => {
          setStudentState(state.map(e => modelTesteCognitivo(fileName.match(/^\w{5}-\d{2}/g)[0],e,dateFirebase)))
          setSucess(false)
        }}
        Sucess={sucess}
      />
      <div className = {classes.tableInner}>
        <MaterialTable
          tableRef={tableRef}
          icons = {tableIcons}
          columns = {[
            { title: 'Semestre', field: 'Semestre', type: 'numeric', align: 'center', cellStyle: {width: 10}, sorting: false },
            { title: 'Codigo', field: 'Codigo', type: 'numeric', align: 'center', cellStyle: {width: 5}, sorting: false },
            { title: 'Disciplina', field: 'Disciplina', align: 'center', cellStyle: {width: 20}, sorting: false },
            { title: 'Turma', field: 'Turma', align: 'center', cellStyle: {width: 20} },
            { title: 'Matricula', field: 'Matricula', type: 'numeric', align: 'center', cellStyle: {width: 20} },
            { title: 'Nome', field: 'Nome', align: 'center', cellStyle: {width: 880} },
            { title: 'Nota', field: 'Nota', type: 'numeric', align: 'center', cellStyle: {width: 20} }
          ]}
          data={stateStudent}
          title={stateStudent ?  fileName.match(/^\w{5}-\d{2}\s-\s*\w*\s*\w*\s*\w*\s*\w*\s*\w*\s*\w*\s*\w*\s*\w*\s*\w*\s*\w*\s*\w*\s*\w*\s*\w*/gm).toString() : '' }
          options={{pageSize: 15, pageSizeOptions: [15,30,50,75,85], exportButton: true, exportDelimiter: ';', sorting: true, draggable: false,
            exportCsv: (columns, data) => {
              const headerRow = ['semestre', 'cod_turma', 'cod_disciplina', 'cod_turma', 'matricula', 'nome']             

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
