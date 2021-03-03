'use strict'

import XLSX, { read } from 'xlsx'

const readFile = (file, setState) => {
  if(file != undefined){
    const reader = new FileReader()
    const rABS = !!reader.readAsBinaryString
    reader.onload = ({ target: { result } }) => {
      const wb = XLSX.read(result, { type: rABS ? "binary" : "array" })
      const wsname = wb.SheetNames[0]
      const ws = wb.Sheets[wsname]
      const data = XLSX.utils.sheet_to_json(ws)
      setState(data)
    };
    if(rABS) { 
      reader.readAsBinaryString(file)
      
    }
    else {
      reader.readAsArrayBuffer(file)
    }
  } 
}

export default readFile
