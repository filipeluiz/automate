'use strict'

const halfConvert = (date) => {
  let dia, mes, ano

  const regex = new RegExp(/\//gm)
  const verificar = regex.test(date)
  if(date == undefined) {
    return 'sem data'
  } 

  if(verificar) {
    dia = parseInt(date.match(/^\d{2}/gm)[0])
    mes = parseInt(date.match(/\d{2}/gm)[1]) - 1
    ano = parseInt(date.match(/\d{4}/gm)[0])
  }
  else {
    dia = parseInt(date.match(/^\d{2}/gm)[0]) 
    mes = date.match(/[A-Za-zç]+/gm)[0].toUpperCase()
    ano = parseInt(date.match(/\d{4}/gm)[0])

    switch(mes) {
      case 'JANEIRO':
        mes = 0;
        break;
      case 'FEVEREIRO':
        mes = 1;
        break;
      case 'MARÇO':
        mes = 2;
        break;
      case 'MARCO':
        mes = 2;
        break;     
      case 'ABRIL':
        mes = 3;
        break;     
      case 'MAIO':
        mes = 4;
        break;     
      case 'JUNHO':
        mes = 5;
        break;     
      case 'JULHO':
        mes = 6;
        break;     
      case 'AGOSTO':
        mes = 7;
        break;     
      case 'SETEMBRO':
        mes = 8;
        break;    
      case 'OUTUBRO':
        mes = 9;
        break;   
      case 'NOVEMBRO':
        mes = 10;
        break; 
      case 'DEZEMBRO':
        mes = 11;
        break;                                                                                                                                
    }    
  }

  const dates = new Date(ano,mes,dia)
  const year = dates.getFullYear()

  if(dates.getUTCMonth() < 6) {
    const anoLetivo = year + '.1'
    return parseFloat(anoLetivo)
	} else {
    const anoLetivo = year + '.2'
		return parseFloat(anoLetivo)
	}
}

export default halfConvert