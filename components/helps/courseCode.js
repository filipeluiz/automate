'use strict'

const courseCode = (strings) => {
  if(strings == undefined) {
    return 'sem curso'
  }

  const course = strings.toUpperCase()
  let code = 'sem curso'  

  switch(course) {
    case 'MEDICINA':
      code = 1
      break
    case 'ENFERMAGEM':
      code = 2
      break
    case 'FARMÁCIA':
      code = 5
      break
    case 'FARMACIA':
      code = 5
      break
    case 'FISIOTERAPIA':
      code = 6
      break
    case 'PSICOLOGIA':
      code = 10
      break
    case 'ODONTOLOGIA':
      code = 23
      break
  }
  return code
}

export default courseCode