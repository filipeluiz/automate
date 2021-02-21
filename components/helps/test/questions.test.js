'use strict'

import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import questions from '../questions'

it('Should be a function', () =>{
  expect(questions).to.be.a('function')
})

it('Should be an array Object', () => {
  const before = deepFreeze({})
  const after = deepFreeze([])

  expect(questions(before)).to.be.deep.equal(after)
})

it('Should return questions [{Q. 1...}, {...}]', () => {
  const before = deepFreeze({ 
    'Avaliar/10,00': "9,00",
    'Completo': "21 setembro 2020  10:23 ",
    'Departamento': "3",
    'Endereço de email': "mariajuliabj@hotmail.com",
    'Estado': "Finalizada",
    'Iniciado em': "21 setembro 2020  10:00 ",
    'Instituição': "Medicina",
    'Nome': "Maria",
    'Q. 1 /1,00': "1,00",
    'Q. 2 /1,00': "1,00",
    'Q. 3 /1,00': "1,00",
    'Q. 4 /1,00': "1,00",
    'Q. 5 /1,00': "1,00",
    'Q. 6 /1,00': "1,00",
    'Q. 7 /1,00': "1,00",
    'Q. 8 /1,00': "1,00",
    'Q. 9 /1,00': "1,00",
    'Q. 10 /1,00': "0,00",
    'Sobrenome': "Julia Bispo Justino",
    'Tempo utilizado': "23 minutos 3 segundos",  
  })
  const after = deepFreeze([
    {'Q. 1 /1,00': '1.00'},
    {'Q. 2 /1,00': '1.00'},
    {'Q. 3 /1,00': '1.00'},
    {'Q. 4 /1,00': '1.00'},
    {'Q. 5 /1,00': '1.00'},
    {'Q. 6 /1,00': '1.00'},
    {'Q. 7 /1,00': '1.00'},
    {'Q. 8 /1,00': '1.00'},
    {'Q. 9 /1,00': '1.00'},
    {'Q. 10 /1,00': '0.00'},
  ])

  expect(questions(before)).to.be.deep.equal(after)
})

it('Should return questions [{Q. 1...}, {...}]', () => {
  const before = deepFreeze({ 
    'Avaliar/10,00': "9,00",
    'Completo': "21 setembro 2020  10:23 ",
    'Departamento': "3",
    'Endereço de email': "mariajuliabj@hotmail.com",
    'Estado': "Finalizada",
    'Iniciado em': "21 setembro 2020  10:00 ",
    'Instituição': "Medicina",
    'Nome': "Maria",
    'Q. 1 /1,00': "1,00",
    'Q. 2 /1,00': "1,00",
    'Q. 3 /1,00': "1,00",
    'Q. 4 /1,00': "1,00",
    'Q. 5 /1,00': "1,00",
    'Sobrenome': "Julia Bispo Justino",
    'Tempo utilizado': "23 minutos 3 segundos",  
  })
  const after = deepFreeze([
    {'Q. 1 /1,00': '1.00'},
    {'Q. 2 /1,00': '1.00'},
    {'Q. 3 /1,00': '1.00'},
    {'Q. 4 /1,00': '1.00'},
    {'Q. 5 /1,00': '1.00'}
  ])

  expect(questions(before)).to.be.deep.equal(after)
})