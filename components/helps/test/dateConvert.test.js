'use strict'

import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import { half, courseCode, questions, calculeGrade } from '../dateConvert'


describe('half test:', () => {
  it('Should be a function', () => {
    expect(half).to.be.a('function')
  })
  
  it('Undefined should return sem data', () => {
    const before = undefined
    const after = 'sem data'
  
    expect(half(before)).equal(after)
  })
  
  it('20/09/2021 should return 2021.2', () => {
    const before = '20/09/2021'
    const after = 2021.2
  
    expect(half(before)).equal(after)
  })
  
  it('1 - "21 Janeiro 2021  10:23" should return 2021.1', () => {
    const before = '21 Janeiro 2021  10:23'
    const after = 2021.1
  
    expect(half(before)).equal(after)
  })
  
  it('2 - "21 Fevereiro 2020  10:23" should return 2020.1', () => {
    const before = '21 Fevereiro 2020  10:23'
    const after = 2020.1
  
    expect(half(before)).equal(after)
  })
  
  it('3 - "21 Março 2020  10:23" should return 2020.1', () => {
    const before = '21 Março 2020  10:23'
    const after = 2020.1
  
    expect(half(before)).equal(after)
  })
  
  it('4 - "21 Abril 2020  10:23" should return 2020.1', () => {
    const before = '21 Abril 2020  10:23'
    const after = 2020.1
  
    expect(half(before)).equal(after)
  })
  
  it('5 - "21 Maio 2020  10:23" should return 2020.1', () => {
    const before = '21 Maio 2020  10:23'
    const after = 2020.1
  
    expect(half(before)).equal(after)
  })
  
  it('6 - "21 Junho 2020  10:23" should return 2020.1', () => {
    const before = '21 Junho 2020  10:23'
    const after = 2020.1
  
    expect(half(before)).equal(after)
  })
  
  it('7 - "21 Julho 2022  10:23" should return 2022.2', () => {
    const before = '21 Julho 2022  10:23'
    const after = 2022.2
  
    expect(half(before)).equal(after)
  })
  
  it('8 - "21 Agosto 2020  10:23" should return 2020.2', () => {
    const before = '21 Agosto 2020  10:23'
    const after = 2020.2
  
    expect(half(before)).equal(after)
  })
  
  it('9 - "21 Setembro 2020  10:23" should return 2020.2', () => {
    const before = '21 Setembro 2020  10:23'
    const after = 2020.2
  
    expect(half(before)).equal(after)
  })
  
  it('9 - "21 Outubro 2020  10:23" should return 2020.2', () => {
    const before = '21 Outubro 2020  10:23'
    const after = 2020.2
  
    expect(half(before)).equal(after)
  })
  
  it('10 - "21 Novembro 2020  10:23" should return 2020.2', () => {
    const before = '21 Novembro 2020  10:23'
    const after = 2020.2
  
    expect(half(before)).equal(after)
  })
  
  it('10 - "21 Dezembro 2020  10:23" should return 2020.2', () => {
    const before = '21 Dezembro 2020  10:23'
    const after = 2020.2
  
    expect(half(before)).equal(after)
  })
  
  it('"21 Marco 2020  10:23" should return 2020.1', () => {
    const before = '21 Marco 2020  10:23'
    const after = 2020.1
  
    expect(half(before)).equal(after)
  })
})

describe('courseCode test:', () => {
  it('Should return to be a function', () => {
    expect(courseCode).to.be.a('function')
  })
  
  it('Undefined should return "sem curso"', () => {
    expect(courseCode()).equal('sem curso')
  })
  
  it('Medicina should return 1', () => {
    const before = 'Medicina'
    const after = 1
    expect(courseCode(before)).equal(after)
  })
  
  it('Enfermagem should return 2', () => {
    const before = 'Enfermagem'
    const after = 2
    expect(courseCode(before)).equal(after)
  })
  
  it('Farmácia should return 5', () => {
    const before = 'Farmácia'
    const after = 5
    expect(courseCode(before)).equal(after)
  })
  
  it('Farmacia should return 5', () => {
    const before = 'Farmacia'
    const after = 5
    expect(courseCode(before)).equal(after)
  })
  
  it('Fisioterapia should return 6', () => {
    const before = 'Fisioterapia'
    const after = 6
    expect(courseCode(before)).equal(after)
  })
  
  it('Psicologia should return 10', () => {
    const before = 'Psicologia'
    const after = 10
    expect(courseCode(before)).equal(after)
  })
  
  it('Odontologia should return 13', () => {
    const before = 'Odontologia'
    const after = 13
    expect(courseCode(before)).equal(after)
  })

  it('Nutrição should return 23', () => {
    const before = 'Nutrição'
    const after = 23
    expect(courseCode(before)).equal(after)
  })
  
  it('Nutricão should return 23', () => {
    const before = 'Nutricão'
    const after = 23
    expect(courseCode(before)).equal(after)
  })

  it('Nutricao should return 23', () => {
    const before = 'Nutricao'
    const after = 23
    expect(courseCode(before)).equal(after)
  })

  it('Nutriçao should return 23', () => {
    const before = 'Nutriçao'
    const after = 23
    expect(courseCode(before)).equal(after)
  })   

})

describe('questions test:', () => {
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
    const after = deepFreeze(['1.00','1.00','1.00','1.00','1.00','1.00','1.00','1.00','1.00','0.00'])
  
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
    const after = deepFreeze(['1.00','1.00','1.00','1.00','1.00'])
  
    expect(questions(before)).to.be.deep.equal(after)
  })
})

describe('calculeGrade test:', () => {
  it('Should return a be function', () => {
    expect(calculeGrade).to.be.a('function')
  })
  
  it('Should return 9.00', () => {
    const before = deepFreeze(['1.00','1.00','1.00','1.00','1.00','1.00','1.00','1.00','1.00','0.00'])
    const after = '9.00'
    expect(calculeGrade(before)).equal(after)
  })
  
  it('Should return 8.50', () => {
    const before = deepFreeze(['0.50','0.50','0.50','0.50','0.50','0.50','0.50','0.50','0.00','0.50','0.50','0.50','0.50','0.00','0.00','0.50','0.50','0.50','0.50','0.50',])
    const after = '8.50'
    expect(calculeGrade(before)).equal(after)
  })
  
  it('Should return 7.86', () => {
    const before = deepFreeze(['0.50','0.50','0.50','0.50','0.50','0.50','0.50','0.50','0.00','0.50','0.50','0.50','0.50','0.50','0.06','0.50','0.80','0.00','0.00','0.00',])
    const after = '7.86'
    expect(calculeGrade(before)).equal(after)
  })
  
  it('Should return 9.29', () => {
    const before = deepFreeze(['2.00', '1.86', '1.43', '2.00', '2.00'])
    const after = '9.29'
    expect(calculeGrade(before)).equal(after)
  })
  
  it('params undefined should return 0.00', () => {
    const before = deepFreeze([])
    const after = '0.00'
    expect(calculeGrade(before)).equal(after)
  })  
})