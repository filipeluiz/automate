'use strict'

export const fetchName = (name, dateFirebase) => {
  if((name && dateFirebase) == undefined) {
    return 'nao encontrado'
  }

  for(let i = 0; i < dateFirebase.length; i++) {
    const find = dateFirebase[i].nome.localeCompare(name, 'pt', { sensitivity: 'base' })
    if(!find) {
      return dateFirebase[i].nome
    }
  }  

  return 'nao encontrado'  
}

export const fetchRegistration = (name, dateFirebase) => {
  if((name && dateFirebase) == undefined) {
    return 'nao encontrado'
  }

  for(let i = 0; i < dateFirebase.length; i++) {
    const find = dateFirebase[i].nome.localeCompare(name, 'pt', { sensitivity: 'base' })
    if(!find) {
      return dateFirebase[i].matricula
    }
  }  

  return 'nao encontrado'
}

export const fetchClass = (name, dateFirebase, discipline) => {
  let classes = 'nao encontrado'
  if((name && dateFirebase && discipline) == undefined) {
    return 'nao econtrado'
  }

  for(let i = 0; i < dateFirebase.length; i++) {
    const find = dateFirebase[i].nome.localeCompare(name, 'pt', { sensitivity: 'base' })
    if(!find) {
      if(typeof dateFirebase[i].anoLetivo[2021][1][discipline] == undefined){
        break
      }
      classes = dateFirebase[i].anoLetivo[2021][1][discipline].turma
    }
  }

  return classes
}
