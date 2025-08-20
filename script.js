const clearBtn = document.querySelector('[data-js-clear]')
const delBtn = document.querySelector('[data-js-del]')
const divideBtn = document.querySelector('[data-js-divide]')
const percent = document.querySelector('[data-js-procent]')
const minusBtn = document.querySelector('[data-js-minus]')
const plusBtn = document.querySelector('[data-js-plus]')
const xBtn = document.querySelector('[data-js-x]')
const commaBtn = document.querySelector('[data-js-comma]')
const equalBtn = document.querySelector('[data-js-equal]')
const nineBtn = document.querySelector('[data-js-nine]')
const eightBtn = document.querySelector('[data-js-eight]')
const sevenBtn = document.querySelector('[data-js-seven]')
const sixBtn = document.querySelector('[data-js-six]')
const fiveBtn = document.querySelector('[data-js-five]')
const fourBtn = document.querySelector('[data-js-four]')
const threeBtn = document.querySelector('[data-js-three]')
const twoBtn = document.querySelector('[data-js-two]')
const oneBtn = document.querySelector('[data-js-one]')
const zeroBtn = document.querySelector('[data-js-zero]')
const dblZeroBtn = document.querySelector('[data-js-dbl-zero]')
const labelElement = document.querySelector('.wrapper__first-row__label')

class Calculator{
  initialState = {
    firstValue: null,
    secondValue: null,
    operator: null,
    halfLength: null,
  }
  constructor() {
    this.state = {...this.initialState}
    this.bindEvents()
  }
  bindEvents(){
    clearBtn.addEventListener('click', () => this.clear())
    commaBtn.addEventListener('click', () => this.comma())
    delBtn.addEventListener('click', () => this.del())
    divideBtn.addEventListener('click', () => this.divide())
    percent.addEventListener('click', () => this.percent())
    minusBtn.addEventListener('click', () => this.minus())
    plusBtn.addEventListener('click', () => this.plus())
    xBtn.addEventListener('click', () => this.x())
    equalBtn.addEventListener('click', () => this.equal())
    nineBtn.addEventListener('click', () => this.nine())
    eightBtn.addEventListener('click', () => this.eight())
    sevenBtn.addEventListener('click', () => this.seven())
    sixBtn.addEventListener('click', () => this.six())
    fiveBtn.addEventListener('click', () => this.five())
    fourBtn.addEventListener('click', () => this.four())
    threeBtn.addEventListener('click', () => this.three())
    twoBtn.addEventListener('click', () => this.two())
    oneBtn.addEventListener('click', () => this.one())
    zeroBtn.addEventListener('click', () => this.zero())
    dblZeroBtn.addEventListener('click', () => this.dblZero())
  }
  dblZero(){
    if (labelElement.textContent.length >= 16) return
    labelElement.textContent += '00'
  }
  zero(){
    if (labelElement.textContent.length >= 16) return
    labelElement.textContent += '0'
  }
  one(){
    if (labelElement.textContent.length >= 16) return
    if (labelElement.textContent.length === 1 && labelElement.textContent[0] === '0'){
      labelElement.textContent = '1'
      return
    }
    labelElement.textContent += '1'
  }
  two(){
    if (labelElement.textContent.length >= 16) return
    if (labelElement.textContent.length === 1 && labelElement.textContent[0] === '0'){
      labelElement.textContent = '2'
      return
    }
    labelElement.textContent += '2'
  }
  three(){
    if (labelElement.textContent.length >= 16) return
    if (labelElement.textContent.length === 1 && labelElement.textContent[0] === '0'){
      labelElement.textContent = '3'
      return
    }
    labelElement.textContent += '3'
  }
  four(){
    if (labelElement.textContent.length >= 16) return
    if (labelElement.textContent.length === 1 && labelElement.textContent[0] === '0'){
      labelElement.textContent = '4'
      return
    }
    labelElement.textContent += '4'
  }
  five(){
    if (labelElement.textContent.length >= 16) return
    if (labelElement.textContent.length === 1 && labelElement.textContent[0] === '0'){
      labelElement.textContent = '5'
      return
    }
    labelElement.textContent += '5'
  }
  six(){
    if (labelElement.textContent.length >= 16) return
    if (labelElement.textContent.length === 1 && labelElement.textContent[0] === '0'){
      labelElement.textContent = '6'
      return
    }
    labelElement.textContent += '6'
  }
  seven(){
    if (labelElement.textContent.length >= 16) return
    if (labelElement.textContent.length === 1 && labelElement.textContent[0] === '0'){
      labelElement.textContent = '7'
      return
    }
    labelElement.textContent += '7'
  }
  eight(){
    if (labelElement.textContent.length >= 16) return
    if (labelElement.textContent.length === 1 && labelElement.textContent[0] === '0'){
      labelElement.textContent = '8'
      return
    }
    labelElement.textContent += '8'
  }
  nine(){
    if (labelElement.textContent.length >= 16) return
    if (labelElement.textContent.length === 1 && labelElement.textContent[0] === '0'){
      labelElement.textContent = '9'
      return
    }
    labelElement.textContent += '9'
  }

  comma(){
    if (labelElement.textContent.length >= 16) return
    if (labelElement.textContent[labelElement.textContent.length - 1] === '+' || labelElement.textContent[labelElement.textContent.length - 1] === '-' || labelElement.textContent[labelElement.textContent.length - 1] === '/' || labelElement.textContent[labelElement.textContent.length - 1] === '*' || labelElement.textContent[labelElement.textContent.length - 1] === '%') return
    labelElement.textContent += '.'
  }

  clear(){
    labelElement.textContent = '0'
  }

  del(){
    if (labelElement.textContent.length <= 1) return
    labelElement.textContent = labelElement.textContent.substring(0, labelElement.textContent.length - 1)
  }

  plus(){
    if (labelElement.textContent.length >= 16) return
    this.state = {
      operator: '+',
      firstValue: labelElement.textContent,
      secondValue: null,
      halfLength: labelElement.textContent.length,
    }
    const lastLetter = labelElement.textContent.length - 1
    if (labelElement.textContent[lastLetter] === '+' || labelElement.textContent[lastLetter] === '-' || labelElement.textContent[lastLetter] === 'x' || labelElement.textContent[lastLetter] === '/' || labelElement.textContent[lastLetter] === '+'){
      labelElement.textContent = labelElement.textContent.substring(0, lastLetter)
    }
    labelElement.textContent += '+'
  }
  minus(){
    if (labelElement.textContent.length >= 16) return
    this.state = {
      operator: '-',
      firstValue: labelElement.textContent,
      secondValue: null,
      halfLength: labelElement.textContent.length,
    }
    const lastLetterMinus = labelElement.textContent.length - 1
    if (labelElement.textContent[lastLetterMinus] === '+' || labelElement.textContent[lastLetterMinus] === '-' || labelElement.textContent[lastLetterMinus] === 'x' || labelElement.textContent[lastLetterMinus] === '/' || labelElement.textContent[lastLetterMinus] === '-'){
      labelElement.textContent = labelElement.textContent.substring(0, lastLetterMinus)
    }
    labelElement.textContent += '-'
  }
  x(){
    if (labelElement.textContent.length >= 16) return
    this.state = {
      operator: '*',
      firstValue: labelElement.textContent,
      secondValue: null,
      halfLength: labelElement.textContent.length,
    }
    const lastLetterX = labelElement.textContent.length - 1
    if (labelElement.textContent[lastLetterX] === '+' || labelElement.textContent[lastLetterX] === '-' || labelElement.textContent[lastLetterX] === 'x' || labelElement.textContent[lastLetterX] === '/' || labelElement.textContent[lastLetterX] === '%'){
      labelElement.textContent = labelElement.textContent.substring(0, lastLetterX)
    }
    labelElement.textContent += 'x'
  }
  divide(){
    if (labelElement.textContent.length >= 16) return
    this.state = {
      operator: '/',
      firstValue: labelElement.textContent,
      secondValue: null,
      halfLength: labelElement.textContent.length,
    }
    const lastLetterDivide = labelElement.textContent.length - 1
    if (labelElement.textContent[lastLetterDivide] === '+' || labelElement.textContent[lastLetterDivide] === '-' || labelElement.textContent[lastLetterDivide] === 'x' || labelElement.textContent[lastLetterDivide] === '/' || labelElement.textContent[lastLetterDivide] === '%'){
      labelElement.textContent = labelElement.textContent.substring(0, lastLetterDivide)
    }
    labelElement.textContent += '/'
  }
  percent(){
    if (labelElement.textContent.length >= 16) return
    this.state = {
      operator: '%',
      firstValue: labelElement.textContent,
      secondValue: null,
      halfLength: labelElement.textContent.length,
    }
    const lastLetterPercent = labelElement.textContent.length - 1
    if (labelElement.textContent[lastLetterPercent] === '+' || labelElement.textContent[lastLetterPercent] === '-' || labelElement.textContent[lastLetterPercent] === 'x' || labelElement.textContent[lastLetterPercent] === '/' || labelElement.textContent[lastLetterPercent] === '%'){
      labelElement.textContent = labelElement.textContent.substring(0, lastLetterPercent)
    }
    labelElement.textContent += '%'
  }

  equal(){
    this.state.secondValue = labelElement.textContent.substring(this.state.halfLength + 1)
    switch (this.state.operator){
      case '+': {
        const score = Number(this.state.firstValue) + Number(this.state.secondValue)
        labelElement.textContent = score.toString()
        break
      }
      case '-': {
        const score = Number(this.state.firstValue) - Number(this.state.secondValue)
        labelElement.textContent = String(score)
        break
      }
      case '/': {
        const score = Number(this.state.firstValue) / Number(this.state.secondValue)
        labelElement.textContent = String(score)
        break
      }
      case '*': {
        const score = Number(this.state.firstValue) * Number(this.state.secondValue)
        labelElement.textContent = String(score)
        break
      }
      case '%': {
        const score = Number(this.state.firstValue) % Number(this.state.secondValue)
        labelElement.textContent = String(score)
        break
      }
    }
  }
}

new Calculator()