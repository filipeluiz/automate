'use strict'

import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import { fetchName, fetchRegistration, fetchClass } from '../fetchDate'

describe('fetchName test:', () => {
  it('Should return be a function', () => { 
    expect(fetchName).to.be.a('function') 
  }) 
  
  it('Any on params undefined should return "não encontrado"', () => {
    const paramsName = 'André Luís Brito Pimentel de Lira Ferraz Gomes'
    const paramsDateFirebase = undefined
    const after = "nao encontrado"
    expect(fetchName(paramsName, paramsDateFirebase)).equal(after)
  })
  
  it('Any on params undefined should return "não encontrado"', () => {
    const paramsName = undefined
    const paramsDateFirebase = deepFreeze([{'curso': "",'email': "",'matricula': "2011201001",'nome': "André Luís Brito Pimentel de Lira Ferraz Gomes"}]) 
    const after = "nao encontrado"
    expect(fetchName(paramsName, paramsDateFirebase)).equal(after)
  })
  
  it('Should return 2020101161', () => {
    const paramsName = 'Gustavo Costa de Albuquerque Maranhao Neto'
    const paramsDateFirebase = deepFreeze([{
      'anoLetivo': {
        '2021': {
          '1': {
            'MED02-14': {
              'AC1': 0,
              'AC1DP1': 0,
              'AC1DP2': 0,
              'AC1DP3': 0,
              'AC1SP1': 0,
              'AC1SP2': 0,
              'AC1SP3': 0,
              'ATT': 0,
              'MT1': 0,
              'MT2': 0,
              'MT3': 0,
              'codigo': "MED02-14",
              'mediaFinal': 0,
              'nome': "Farmacocinética e farmacodinâmica dos principais grupos de medicamentos",
              'situacao': "Matriculado",
              'turma': "14FFP011",        
            },
            'MED02-15': {
              'AC1': 0,
              'AC1DP1': 0,
              'AC1DP2': 0,
              'AC1DP3': 0,
              'AC1SP1': 0,
              'AC1SP2': 0,
              'AC1SP3': 0,
              'ATT': 0,
              'MT1': 0,
              'MT2': 0,
              'MT3': 0,
              'codigo': "MED02-15",
              'mediaFinal': 0,
              'nome': "Estudo da função dos órgãos e sistemas II",
              'situacao': "Matriculado",
              'turma': "15EFOS061",        
            },          
            
          }
        }
      },
      'curso': "",
      'email': "",
      'matricula': "2020101161",
      'nome': "Gustavo Costa de Albuquerque Maranhão Neto"
    }]) 
    const after = "Gustavo Costa de Albuquerque Maranhão Neto"
    expect(fetchName(paramsName, paramsDateFirebase)).equal(after) 
  })
  
  it('Should return 2020101161', () => {
    const paramsName = 'Filipe Luiz Rodrigues Correia'
    const paramsDateFirebase = deepFreeze([{
      'anoLetivo': {
        '2021': {
          '1': {
            'MED02-14': {
              'AC1': 0,
              'AC1DP1': 0,
              'AC1DP2': 0,
              'AC1DP3': 0,
              'AC1SP1': 0,
              'AC1SP2': 0,
              'AC1SP3': 0,
              'ATT': 0,
              'MT1': 0,
              'MT2': 0,
              'MT3': 0,
              'codigo': "MED02-14",
              'mediaFinal': 0,
              'nome': "Farmacocinética e farmacodinâmica dos principais grupos de medicamentos",
              'situacao': "Matriculado",
              'turma': "14FFP011",        
            },
            'MED02-15': {
              'AC1': 0,
              'AC1DP1': 0,
              'AC1DP2': 0,
              'AC1DP3': 0,
              'AC1SP1': 0,
              'AC1SP2': 0,
              'AC1SP3': 0,
              'ATT': 0,
              'MT1': 0,
              'MT2': 0,
              'MT3': 0,
              'codigo': "MED02-15",
              'mediaFinal': 0,
              'nome': "Estudo da função dos órgãos e sistemas II",
              'situacao': "Matriculado",
              'turma': "15EFOS061",        
            },          
            
          }
        }
      },
      'curso': "",
      'email': "",
      'matricula': "2020101161",
      'nome': "Gustavo Costa de Albuquerque Maranhão Neto"
    }]) 
    const after = "nao encontrado"
    expect(fetchName(paramsName, paramsDateFirebase)).equal(after) 
  })  
})

describe('fetchRegistration test:', () => {
  it('Should return be a function', () => {
    expect(fetchRegistration).to.be.a('function')
  })
  
  it('All params undefineds should return "não encontrado"', () => {
    expect(fetchRegistration()).equal("nao encontrado")
  })
  
  it('Any on params undefined should return "não encontrado"', () => {
    const paramsName = 'André Luís Brito Pimentel de Lira Ferraz Gomes'
    const paramsDateFirebase = undefined
    const after = "nao encontrado"
    expect(fetchRegistration(paramsName, paramsDateFirebase)).equal(after)
  })
  
  it('Any on params undefined should return "não encontrado"', () => {
    const paramsName = undefined
    const paramsDateFirebase = deepFreeze([{'curso': "",'email': "",'matricula': "2011201001",'nome': "André Luís Brito Pimentel de Lira Ferraz Gomes"}]) 
    const after = "nao encontrado"
    expect(fetchRegistration(paramsName, paramsDateFirebase)).equal(after)
  })
  
  it('Should return 2020101161', () => {
    const paramsName = 'Gustavo Costa de Albuquerque Maranhao Neto'
    const paramsDateFirebase = deepFreeze([{
      'anoLetivo': {
        '2021': {
          '1': {
            'MED02-14': {
              'AC1': 0,
              'AC1DP1': 0,
              'AC1DP2': 0,
              'AC1DP3': 0,
              'AC1SP1': 0,
              'AC1SP2': 0,
              'AC1SP3': 0,
              'ATT': 0,
              'MT1': 0,
              'MT2': 0,
              'MT3': 0,
              'codigo': "MED02-14",
              'mediaFinal': 0,
              'nome': "Farmacocinética e farmacodinâmica dos principais grupos de medicamentos",
              'situacao': "Matriculado",
              'turma': "14FFP011",        
            },
            'MED02-15': {
              'AC1': 0,
              'AC1DP1': 0,
              'AC1DP2': 0,
              'AC1DP3': 0,
              'AC1SP1': 0,
              'AC1SP2': 0,
              'AC1SP3': 0,
              'ATT': 0,
              'MT1': 0,
              'MT2': 0,
              'MT3': 0,
              'codigo': "MED02-15",
              'mediaFinal': 0,
              'nome': "Estudo da função dos órgãos e sistemas II",
              'situacao': "Matriculado",
              'turma': "15EFOS061",        
            },          
            
          }
        }
      },
      'curso': "",
      'email': "",
      'matricula': "2020101161",
      'nome': "Gustavo Costa de Albuquerque Maranhão Neto"
    }]) 
    const after = "2020101161"
    expect(fetchRegistration(paramsName, paramsDateFirebase)).equal(after) 
  })
  
  it('Should return nao encontrado', () => {
    const paramsName = 'Filipe Luiz Rodrigues Correia'
    const paramsDateFirebase = deepFreeze([{
      'anoLetivo': {
        '2021': {
          '1': {
            'MED02-14': {
              'AC1': 0,
              'AC1DP1': 0,
              'AC1DP2': 0,
              'AC1DP3': 0,
              'AC1SP1': 0,
              'AC1SP2': 0,
              'AC1SP3': 0,
              'ATT': 0,
              'MT1': 0,
              'MT2': 0,
              'MT3': 0,
              'codigo': "MED02-14",
              'mediaFinal': 0,
              'nome': "Farmacocinética e farmacodinâmica dos principais grupos de medicamentos",
              'situacao': "Matriculado",
              'turma': "14FFP011",        
            },
            'MED02-15': {
              'AC1': 0,
              'AC1DP1': 0,
              'AC1DP2': 0,
              'AC1DP3': 0,
              'AC1SP1': 0,
              'AC1SP2': 0,
              'AC1SP3': 0,
              'ATT': 0,
              'MT1': 0,
              'MT2': 0,
              'MT3': 0,
              'codigo': "MED02-15",
              'mediaFinal': 0,
              'nome': "Estudo da função dos órgãos e sistemas II",
              'situacao': "Matriculado",
              'turma': "15EFOS061",        
            },          
            
          }
        }
      },
      'curso': "",
      'email': "",
      'matricula': "2020101161",
      'nome': "Gustavo Costa de Albuquerque Maranhão Neto"
    }]) 
    const after = "nao encontrado"
    expect(fetchRegistration(paramsName, paramsDateFirebase)).equal(after) 
  })  
})

describe('fetchClass test:', () => {
  it('Should return a be function', () => {
    expect(fetchClass).to.be.a('function')
  })
  
  it('All params undefineds should return "não encontrado"', () => {
    expect(fetchClass()).equal("nao econtrado")
  })
  
  it('Any on params undefined should return "não encontrado"', () => {
    const paramsName = 'André Luís Brito Pimentel de Lira Ferraz Gomes'
    const paramsDateFirebase = deepFreeze([{'curso': "",'email': "",'matricula': "2011201001",'nome': "André Luís Brito Pimentel de Lira Ferraz Gomes"}]) 
    const paramsDiscipline = undefined
    const after = "nao econtrado"
    expect(fetchClass(paramsName, paramsDateFirebase, paramsDiscipline)).equal(after)
  })
  
  it('Any on params undefined should return "não encontrado"', () => {
    const paramsName = 'André Luís Brito Pimentel de Lira Ferraz Gomes'
    const paramsDateFirebase = undefined
    const paramsDiscipline = 'MED02-14'
    const after = "nao econtrado"
    expect(fetchClass(paramsName, paramsDateFirebase, paramsDiscipline)).equal(after)
  })
  
  it('Any on params undefined should return "não encontrado"', () => {
    const paramsName = undefined
    const paramsDateFirebase = deepFreeze([{'curso': "",'email': "",'matricula': "2011201001",'nome': "André Luís Brito Pimentel de Lira Ferraz Gomes"}]) 
    const paramsDiscipline = 'MED02-14'
    const after = "nao econtrado"
    expect(fetchClass(paramsName, paramsDateFirebase, paramsDiscipline)).equal(after)
  })
  
  it('All on params not should return "não encontrado"', () => {
    const paramsName = 'Gustavo Costa de Albuquerque Maranhao Neto'
    const paramsDateFirebase = deepFreeze([{
      'anoLetivo': {
        '2021': {
          '1': {
            'MED02-14': {
              'AC1': 0,
              'AC1DP1': 0,
              'AC1DP2': 0,
              'AC1DP3': 0,
              'AC1SP1': 0,
              'AC1SP2': 0,
              'AC1SP3': 0,
              'ATT': 0,
              'MT1': 0,
              'MT2': 0,
              'MT3': 0,
              'codigo': "MED02-14",
              'mediaFinal': 0,
              'nome': "Farmacocinética e farmacodinâmica dos principais grupos de medicamentos",
              'situacao': "Matriculado",
              'turma': "14FFP011",        
            },
            'MED02-15': {
              'AC1': 0,
              'AC1DP1': 0,
              'AC1DP2': 0,
              'AC1DP3': 0,
              'AC1SP1': 0,
              'AC1SP2': 0,
              'AC1SP3': 0,
              'ATT': 0,
              'MT1': 0,
              'MT2': 0,
              'MT3': 0,
              'codigo': "MED02-15",
              'mediaFinal': 0,
              'nome': "Estudo da função dos órgãos e sistemas II",
              'situacao': "Matriculado",
              'turma': "15EFOS061",        
            },          
            
          }
        }
      },
      'curso': "",
      'email': "",
      'matricula': "2020101161",
      'nome': "Gustavo Costa de Albuquerque Maranhão Neto"
    }]) 
    const paramsDiscipline = 'MED02-14'
    const after = "14FFP011"
    expect(fetchClass(paramsName, paramsDateFirebase, paramsDiscipline)).equal(after) 
  })
  
  it('All on params not should return "não encontrado"', () => {
    const paramsName = 'Gustavo Costa de Albuquerque Maranhao Neto'
    const paramsDateFirebase = deepFreeze([{
      'anoLetivo': {
        '2021': {
          '1': {
            'MED02-14': {
              'AC1': 0,
              'AC1DP1': 0,
              'AC1DP2': 0,
              'AC1DP3': 0,
              'AC1SP1': 0,
              'AC1SP2': 0,
              'AC1SP3': 0,
              'ATT': 0,
              'MT1': 0,
              'MT2': 0,
              'MT3': 0,
              'codigo': "MED02-14",
              'mediaFinal': 0,
              'nome': "Farmacocinética e farmacodinâmica dos principais grupos de medicamentos",
              'situacao': "Matriculado",
              'turma': "14FFP011",        
            },
            'MED02-15': {
              'AC1': 0,
              'AC1DP1': 0,
              'AC1DP2': 0,
              'AC1DP3': 0,
              'AC1SP1': 0,
              'AC1SP2': 0,
              'AC1SP3': 0,
              'ATT': 0,
              'MT1': 0,
              'MT2': 0,
              'MT3': 0,
              'codigo': "MED02-15",
              'mediaFinal': 0,
              'nome': "Estudo da função dos órgãos e sistemas II",
              'situacao': "Matriculado",
              'turma': "15EFOS061",        
            },          
            
          }
        }
      },
      'curso': "",
      'email': "",
      'matricula': "2020101161",
      'nome': "Gustavo Costa de Albuquerque Maranhão Neto"
    }]) 
    const paramsDiscipline = 'MED02-16'
    const after = "nao encontrado"
    expect(fetchClass(paramsName, paramsDateFirebase, paramsDiscipline)).equal(after)
  })
  
  it('All on params not should return "não encontrado"', () => {
    const paramsName = 'Filipe Luiz Rodrigues Correia'
    const paramsDateFirebase = deepFreeze([{
      'anoLetivo': {
        '2021': {
          '1': {
            'MED02-14': {
              'AC1': 0,
              'AC1DP1': 0,
              'AC1DP2': 0,
              'AC1DP3': 0,
              'AC1SP1': 0,
              'AC1SP2': 0,
              'AC1SP3': 0,
              'ATT': 0,
              'MT1': 0,
              'MT2': 0,
              'MT3': 0,
              'codigo': "MED02-14",
              'mediaFinal': 0,
              'nome': "Farmacocinética e farmacodinâmica dos principais grupos de medicamentos",
              'situacao': "Matriculado",
              'turma': "14FFP011",        
            },
            'MED02-15': {
              'AC1': 0,
              'AC1DP1': 0,
              'AC1DP2': 0,
              'AC1DP3': 0,
              'AC1SP1': 0,
              'AC1SP2': 0,
              'AC1SP3': 0,
              'ATT': 0,
              'MT1': 0,
              'MT2': 0,
              'MT3': 0,
              'codigo': "MED02-15",
              'mediaFinal': 0,
              'nome': "Estudo da função dos órgãos e sistemas II",
              'situacao': "Matriculado",
              'turma': "15EFOS061",        
            },          
            
          }
        }
      },
      'curso': "",
      'email': "",
      'matricula': "2020101161",
      'nome': "Gustavo Costa de Albuquerque Maranhão Neto"
    }]) 
    const paramsDiscipline = 'MED02-16'
    const after = "nao encontrado"
    expect(fetchClass(paramsName, paramsDateFirebase, paramsDiscipline)).equal(after)
  })  
})