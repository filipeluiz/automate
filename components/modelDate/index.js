'use strict'

export const modelStudent = (date) => {
  return {
    matricula: date.matricula,
    nome: date.nome,
    curso: date.curso,
    email: date.email,
    anoLetivo: [modelAnoLetivo(date.anoLetivo)]
  }
}

export const modelAnoLetivo = (...date) => {
  return {
    semestre: date.semestre,
    disciplinas: [modelDisciplinas(date.disciplinas)]
  }
}

export const modelDisciplinas = (...date) => {
  return {
    codigo: date.codigo,
    nome: date.nome,
    turma: date.turma,
    situacao: date.situacao,
    AC1SP1: date.AC1SP1,
    AC1DP1: date.AC1DP1,
    MT1: date.MT1,
    AC1SP2: date.AC1SP2,
    AC1DP2: date.AC1DP2,
    MT2: date.MT2,
    AC1SP3: date.AC1SP3,
    AC1DP3: date.AC1DP3,
    MT3: date.MT3,
    AC1: date.AC1,
    ATT: date.ATT,
    mediaFinal: date.mediaFinal
  }
}