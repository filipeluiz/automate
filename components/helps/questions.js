'use strict'

const questions = (date) => {
  const question = Object.keys(date).map(key => {
    const regex = new RegExp(/^Q.\s+\d+\s+\/\d+,\d+/gm)
    if(regex.test(key)){
      return {
          [key]: parseFloat(date[key].replace(',','.')).toFixed(2)
      }
    }
  })

  const result = question.filter(e => {
    if(e != undefined){
      return {
        e
      }
    }
  })

  return result
}

export default questions