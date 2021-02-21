'use strict'

import { expect } from 'chai'
import halfConvert from '../half'

it('Should be a function', () => {
  expect(halfConvert).to.be.a('function')
})

it('Undefined should return sem data', () => {
  const before = undefined
  const after = 'sem data'

  expect(halfConvert(before)).equal(after)
})

it('20/09/2021 should return 2021.2', () => {
  const before = '20/09/2021'
  const after = 2021.2

  expect(halfConvert(before)).equal(after)
})


it('1 - "21 Janeiro 2021  10:23" should return 2021.1', () => {
  const before = '21 Janeiro 2021  10:23'
  const after = 2021.1

  expect(halfConvert(before)).equal(after)
})

it('2 - "21 Fevereiro 2020  10:23" should return 2020.1', () => {
  const before = '21 Fevereiro 2020  10:23'
  const after = 2020.1

  expect(halfConvert(before)).equal(after)
})

it('3 - "21 Março 2020  10:23" should return 2020.1', () => {
  const before = '21 Março 2020  10:23'
  const after = 2020.1

  expect(halfConvert(before)).equal(after)
})

it('4 - "21 Abril 2020  10:23" should return 2020.1', () => {
  const before = '21 Abril 2020  10:23'
  const after = 2020.1

  expect(halfConvert(before)).equal(after)
})

it('5 - "21 Maio 2020  10:23" should return 2020.1', () => {
  const before = '21 Maio 2020  10:23'
  const after = 2020.1

  expect(halfConvert(before)).equal(after)
})

it('6 - "21 Junho 2020  10:23" should return 2020.1', () => {
  const before = '21 Junho 2020  10:23'
  const after = 2020.1

  expect(halfConvert(before)).equal(after)
})

it('7 - "21 Julho 2022  10:23" should return 2022.2', () => {
  const before = '21 Julho 2022  10:23'
  const after = 2022.2

  expect(halfConvert(before)).equal(after)
})

it('8 - "21 Agosto 2020  10:23" should return 2020.2', () => {
  const before = '21 Agosto 2020  10:23'
  const after = 2020.2

  expect(halfConvert(before)).equal(after)
})

it('9 - "21 Setembro 2020  10:23" should return 2020.2', () => {
  const before = '21 Setembro 2020  10:23'
  const after = 2020.2

  expect(halfConvert(before)).equal(after)
})

it('9 - "21 Outubro 2020  10:23" should return 2020.2', () => {
  const before = '21 Outubro 2020  10:23'
  const after = 2020.2

  expect(halfConvert(before)).equal(after)
})

it('10 - "21 Novembro 2020  10:23" should return 2020.2', () => {
  const before = '21 Novembro 2020  10:23'
  const after = 2020.2

  expect(halfConvert(before)).equal(after)
})

it('10 - "21 Dezembro 2020  10:23" should return 2020.2', () => {
  const before = '21 Dezembro 2020  10:23'
  const after = 2020.2

  expect(halfConvert(before)).equal(after)
})

it('"21 Marco 2020  10:23" should return 2020.1', () => {
  const before = '21 Marco 2020  10:23'
  const after = 2020.1

  expect(halfConvert(before)).equal(after)
})