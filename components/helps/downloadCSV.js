'use strict'

const downloadCSV = (data, fileName) => {
  const finalFileName = fileName.endsWith(".csv") ? fileName : `${fileName}.csv`
  const a = document.createElement("a")
  a.href = URL.createObjectURL(new Blob([data], { type: "text/csv;charset=utf-8,%EF%BB%BF" }))
  a.setAttribute("download", finalFileName)
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}

export default downloadCSV
