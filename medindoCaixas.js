const transpasseNormal = 10
const transpasse30 = 60
const abaEnvoltorio = 80
const abaMaleta = 70
const abaEnvoltorio01Tampa = 60
const somaAltura = 5

let inputLengthBox = document.getElementById('lengthBox')
let inputWidthBox = document.getElementById('widthBox')
let inputHeightBox = document.getElementById('heightBox')
let totalLength = document.getElementById('totalLength')
let totalWidth = document.getElementById('totalWidth')

let inputGramatura = document.getElementById('gramatura')
let inputValorKg = document.getElementById('valorKg')
let totalValue = document.getElementById('resultValue')
let totalRs = document.getElementById('resultR')

let tipoDeCaixa = document.getElementById('tiposDeCaixa')

let buttonValue = document.getElementById('calcValor')

let resultBox = []
let isInvalid = false
let isInvalidValue = false

function typeOfBox(boxes) {
  let lengthBox = parseInt(inputLengthBox.value)
  let widthBox = parseInt(inputWidthBox.value)
  let heightBox = parseInt(inputHeightBox.value)

  if (
    isInvalidFunction(lengthBox) ||
    isInvalidFunction(widthBox) ||
    isInvalidFunction(heightBox)
  ) {
    isInvalid = true
    addClass()
  } else {
    isInvalid = false
    removeClass()

    switch (boxes) {
      case 'maleta':
        calcMaleta(lengthBox, widthBox, heightBox)
        break

      case 'maletaTTotal':
        calcMaletaTTotal(lengthBox, widthBox, heightBox)
        break

      case 'maletaT030':
        calcMaletaT30(lengthBox, widthBox, heightBox)
        break

      case 'env1tampa':
        calcEnv01Tampa(lengthBox, widthBox, heightBox)
        break

      case 'envNormal':
        calcEnvNormal(lengthBox, widthBox, heightBox)
        break

      case 'envT030':
        calcEnvTransp30(lengthBox, widthBox, heightBox)
        break
    }
  }
}
//Calculando medidas de caixas

function calcMaleta(length, width, height) {
  const riscador =
    (width + transpasseNormal) / 2 +
    (height + somaAltura) +
    (width + transpasseNormal) / 2
  const impressora = length + width + length + width + abaMaleta

  resultBox = [riscador, impressora]
  return resultBox
}

function calcMaletaTTotal(length, width, height) {
  const riscador = width + (height + somaAltura) + width
  const impressora = length + width + length + width + abaMaleta

  resultBox = [riscador, impressora]
  return resultBox
}

function calcMaletaT30(length, width, height) {
  const riscador =
    (width + transpasse30) / 2 +
    (height + somaAltura) +
    (width + transpasse30) / 2
  const impressora = length + width + length + width + abaMaleta

  resultBox = [riscador, impressora]
  return resultBox
}

function calcEnvNormal(length, width, height) {
  const riscador =
    (width + transpasseNormal) / 2 +
    (height + somaAltura) +
    (width + somaAltura) +
    (height + somaAltura) +
    (width + transpasseNormal) / 2
  const impressora = abaEnvoltorio + height + length + height + abaEnvoltorio

  resultBox = [riscador, impressora]
  return resultBox
}

function calcEnv01Tampa(length, width, height) {
  const riscador =
    width +
    somaAltura +
    (height + somaAltura) +
    (width + somaAltura) +
    (height + somaAltura) +
    abaEnvoltorio01Tampa
  const impressora = abaEnvoltorio + height + length + height + abaEnvoltorio

  resultBox = [riscador, impressora]
  return resultBox
}

function calcEnvTransp30(length, width, height) {
  const riscador =
    (width + transpasse30) / 2 +
    (height + somaAltura) +
    (width + somaAltura) +
    (height + somaAltura) +
    (width + transpasse30) / 2
  const impressora = abaEnvoltorio + height + length + height + abaEnvoltorio

  resultBox = [riscador, impressora]
  return resultBox
}


function isInvalidFunction(valor) {
  if (valor <= 0 || isNaN(valor)) {
    return true
  } else {
    return false
  }
}

function finalValue(comp, larg, gramatura, valor) {
  let area = (comp * larg) / 1000
  let result = (gramatura * area * valor) / 1000
  
  return result
}

function gramatura(gram) {
  gram > 1 ? (gram = gram / 1000) : gram
  return gram
}

function setTimes(resultLength, resultWidth) {
  totalLength.textContent = resultLength
  totalWidth.textContent = resultWidth
}

function setValue(resultValue) {
  totalRs.textContent = 'R$ '
  totalValue.textContent = resultValue.toFixed(2)
}

function msgError() {
  totalLength.textContent = 'VALOR '
  totalWidth.textContent = 'INVÁLIDO'
}

function msgErrorValue() {
  totalRs.textContent = ''
  totalValue.textContent = 'VALOR INVÁLIDO'
}

function removeClass() {
  buttonValue.disabled = false
  buttonValue.classList.remove('disabled')
}

function addClass() {
  buttonValue.disabled = true
  buttonValue.classList.add('disabled')
}

// FUNCTION OF BUTTON

function getMeasure() {
  tipoDeCaixa = document.getElementById('tiposDeCaixa').value

  typeOfBox(tipoDeCaixa)
  isInvalid ? msgError() : setTimes(resultBox[0], resultBox[1])
}

function getValues() {
  getMeasure()
  let gramaturaCaixa = gramatura(parseFloat(inputGramatura.value))
  let valorKg = parseFloat(inputValorKg.value)

  const valorFinal = finalValue(
    resultBox[0],
    resultBox[1],
    gramaturaCaixa,
    valorKg
  )

  if (isInvalidFunction(gramaturaCaixa) || isInvalidFunction(valorKg)) {
    isInvalidValue = true
  } else {
    isInvalidValue = false
  }

  isInvalidValue ? msgErrorValue() : setValue(valorFinal)
}