'use strict'

import { expect } from 'chai'
import courseCode from '../courseCode'

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

it('Odontologia should return 23', () => {
  const before = 'Odontologia'
  const after = 23
  expect(courseCode(before)).equal(after)
})
