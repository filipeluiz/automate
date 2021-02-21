'use strict'

export const modelStudent = (date) => {
  return {
    matricula: date.matricula || '',
    nome: date.nome || '',
    curso: date.curso || '',
    email: date.email || '',
    anoLetivo: ''
  }
}

export const modelDisciplinas = (date) => {
  return {
    codigo: date.Disciplina.match(/^\w{5}-\d{2}/g)[0] || '',
    nome: date.Disciplina.match(/\s[A-Za-zà-ù]+/g).join('').trim() || '',
    turma: date.Turma || '',
    situacao: date.Situacao || '',
    AC1SP1: date.AC1SP1 || 0,
    AC1DP1: date.AC1DP1 || 0,
    MT1: date.MT1 || 0,
    AC1SP2: date.AC1SP2 || 0,
    AC1DP2: date.AC1DP2 || 0,
    MT2: date.MT2 || 0,
    AC1SP3: date.AC1SP3 || 0,
    AC1DP3: date.AC1DP3 || 0,
    MT3: date.MT3 || 0,
    AC1: date.AC1 || 0,
    ATT: date.ATT || 0,
    mediaFinal: date.mediaFinal || 0
  }
}

export const modelTesteCognitivo = (date) => {
  
}