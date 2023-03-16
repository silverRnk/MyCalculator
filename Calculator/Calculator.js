
// class Calculator {

//   OnClickButton = {
//     OnClickButton1: '1',
//     OnClickButton2: '2',
//     OnClickButton3: '3',
//     OnClickButton4: '4',
//     OnClickButton5: '5',
//     OnClickButton6: '6',
//     OnClickButton7: '7',
//     OnClickButton8: '8',
//     OnClickButton9: '9',
//     OnClickButton0: '0',
//     OnClickButtonAdd: '+',
//     OnClickButtonMinus: '-',
//     OnClickButtonMult: '*',
//     OnClickButtonDiv: '/',
//     OnClickButtonC: 'C',
//     OnClickButtonCE: 'CE',
//     OnClickButtonPernt: '%',
//     OnClickButtonEquals: '='
//   }

//   constructor(){
//     this.params = {
//       operand1: '',
//       operand2: '',
//       display: '',
//     }

//     this.operator = '';
//     this.isOnOperatorEn = false;
//   }

//   OnClickButton(input) {
//     switch(input){
//       case  OnClickButton.OnClickButton0:
//       this.updateOperand(this.params, OnClickButton.OnClickButton0);
//       break;
//       case OnClickButton.OnClickButton1:
//       this.updateOperand(this.params, OnClickButton.OnClickButton1);
//       break;
//       case OnClickButton.OnClickButton2:
//       this.updateOperand(this.params, OnClickButton.OnClickButton2);
//       break;
//       case OnClickButton.OnClickButton3:
//       this.updateOperand(this.params, OnClickButton.OnClickButton3);
//       break;
//       case OnClickButton.OnClickButton4:
//       this.updateOperand(this.params, OnClickButton.OnClickButton4);
//       break;
//       case OnClickButton.OnClickButton5:
//       // TODO
//       break;
//       case OnClickButton.OnClickButton6:
//       // TODO
//       break;
//       case OnClickButton.OnClickButton7:
//       // TODO
//       break;
//       case OnClickButton.OnClickButton8:
//       // TODO
//       break;
//       case OnClickButton.OnClickButton9:
//       // TODO
//       break;
//       case OnClickButton.OnClickButtonAdd:
//       this.updateOperator(OnClickButton.OnClickButtonAdd);
//       break;
//       case OnClickButton.OnClickButtonMinus:
//       this.operator = OnClickButton.OnClickButtonMinus;
//       break;
//       case OnClickButton.OnClickButtonMult:
//       this.operator = OnClickButton.OnClickButtonMult;
//       break;
//       case OnClickButton.OnClickButtonDiv:
//       this.operator = OnClickButton.OnClickButtonDiv;
//       break;
//       case OnClickButton.OnClickButtonC:
//       // TODO
//       break;
//       case OnClickButton.OnClickButtonCE:
//       // TODO
//       break;
//       case OnClickButton.OnClickButtonPernt:
//       // TODO
//       break;
//     }
//   }

//   updateOperand(operand, key) {

//     let operandToOperate = ''

//     if((this.params.operand == '') && (this.operator == '')){
//       operandToOperate = 'operand1'
//     }else if ((this.params.operand1 != '') && (this.operator != '') ) {
//       operandToOperate = 'operand2'
//     }else {
//       operandToOperate = 'operand1'
//     }

//     console.log(operandToOperate)
//     switch (operandToOperate) {
//       case 'operand1':
//       if(operand == ''){
//         operand.operand1 = key;
//         operand.display = operand.operand1
//       }else {
//         operand.operand1 = operand.operand1 + key;
//       }
//       operand.display = operand.operand1;
//       break;
//       case 'operand2':
//       if(operand == ''){
//         operand.operand2 = key;
//       }else {
//         operand.operand2 = operand.operand2 + key;
//       }
//       operand.display = operand.operand2;
//       break;
//       default:
//     }

//     console.log('display: ' + operand.operand1 + '' + this.operator + '' + operand.operand2)

//   }

//   updateOperator(key){
//     if(this.params.operand1 != ''){
//       this.operator = key;
//     }
//   }

// }




// console.log('Operand1')
// const calculator = new Calculator();

// document.getElementById('button0').onclick = function () {calculator.OnClickButton(OnClickButton.OnClickButton0)};
// document.getElementById('buttonPlus').onclick = function () {calculator.OnClickButton(OnClickButton.OnClickButtonAdd)};


/* *

calculator.OnClickButton(OnClickButton.OnClickButton0);
console.log('operand1 ' + calculator.params.operand1);
calculator.OnClickButton(OnClickButton.OnClickButton0);
console.log('operand1 ' + calculator.params.operand1);
calculator.OnClickButton(OnClickButton.OnClickButton3);
calculator.OnClickButton(OnClickButton.OnClickButton4);
console.log('operand1 ' + calculator.params.operand1);
calculator.OnClickButton(OnClickButton.OnClickButtonAdd);
calculator.OnClickButton(OnClickButton.OnClickButton4);
console.log('operand2 ' + calculator.params.operand2);

*/
let operand1, operand2, operation
operand1= operand2 = ''
operantion = null;

function inputNumber(char){
  if(char.length === 1){
    operand1 = operand1 + char
  }else{
    alert("invalid input")
  }
}

function inputOperation(x){
  if(operand2 == ''){
    operation = x;
    operand2 = operand1.valueOf();
    operand1 = ''
  }else{
    let answer = evaluate(operation, operand1, operand2);
    console.log(answer);
    operand1 = `${answer}`;
    operand2 = '';
  }
}

function evaluate(operation, operand1, operand2){
  if(operation == '+'){
    return Number(operand2) + Number(operand1)
  }else if(operation == '-'){
    return Number(operand2) - Number(operand1)
  }else if(operation == '/'){
    try {
      return Number(operand2) / Number(operand1)
    } catch (error) {
      console.log('Invalid Operation division');
    }
  }else if(operation == '*'){
    return Number(operand2) / Number(operand1)
  }
}


const display = document.querySelector('#lcd');
let numberInputBtns, operationBtns;

numberInputBtns = document.querySelectorAll('.numberInput');
numberInputBtns = Array.from(numberInputBtns);

operationBtns = document.querySelectorAll('.operation');
operationBtns = Array.from(operationBtns);

numberInputBtns.forEach(element => {
  element.addEventListener('click', () => {
    inputNumber(element.innerText);
    if(operand1 === null){
      display.innerHTML = ''
    }else{
      display.innerHTML = operand1;
    }
  })
})


operationBtns.forEach(element => {
  element.addEventListener('click', () =>
  {
    inputOperation(element.innerText);
    if(operand1 === null){
      display.innerHTML = ''
    }else{
      display.innerHTML = operand1;
    }
  })
})

