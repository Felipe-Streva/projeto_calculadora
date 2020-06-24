let calculator = {
    display: '',
    acc: 0,
    decimals: 2,
    addNumber(event){
        this.display.textContent += event.target.textContent;
        this.acc.textContent += event.target.textContent;
    },
    addSinal(event){
        this.acc.textContent = eval(this.acc.textContent).toFixed(this.decimals);
        this.display.textContent += event.target.textContent ;
        this.acc.textContent += event.target.textContent;
    },
    changeDecimals(event){
        this.decimals.textContent = event.target.value;
        console.log(this.decimals)
    }
};

calculator.display = document.querySelector("#display");
calculator.acc = document.querySelector("#acc");

let buttonOne = document.querySelector("#numberOne");
let buttonTwo = document.querySelector("#numberTwo");
let buttonThree = document.querySelector("#numberThree");
let buttonFour = document.querySelector("#numberFour");
let buttonFive = document.querySelector("#numberFive");
let buttonSix = document.querySelector("#numberSix");
let buttonSeven = document.querySelector("#numberSeven");
let buttonEigth = document.querySelector("#numberEigth");
let buttonNine = document.querySelector("#numberNine");
let buttonZero = document.querySelector("#numberZero");
let buttonSum = document.querySelector("#sum");
let buttonSubtract = document.querySelector("#subtract");
let buttonSplit = document.querySelector("#split");
let buttonMultiply = document.querySelector("#multiply");
let buttonEquals = document.querySelector("#equals");
let inputDecimals = document.querySelector("#decimals");

buttonOne.addEventListener('click', calculator.addNumber.bind(calculator))
buttonTwo.addEventListener('click', calculator.addNumber.bind(calculator))
buttonThree.addEventListener('click', calculator.addNumber.bind(calculator))
buttonFour.addEventListener('click', calculator.addNumber.bind(calculator))
buttonFive.addEventListener('click', calculator.addNumber.bind(calculator))
buttonSix.addEventListener('click', calculator.addNumber.bind(calculator))
buttonSeven.addEventListener('click', calculator.addNumber.bind(calculator))
buttonEigth.addEventListener('click', calculator.addNumber.bind(calculator))
buttonNine.addEventListener('click', calculator.addNumber.bind(calculator))
buttonZero.addEventListener('click', calculator.addNumber.bind(calculator))

buttonSum.addEventListener('click', calculator.addSinal.bind(calculator))
buttonSubtract.addEventListener('click', calculator.addSinal.bind(calculator))
buttonSplit.addEventListener('click', calculator.addSinal.bind(calculator))
buttonMultiply.addEventListener('click', calculator.addSinal.bind(calculator))

inputDecimals.addEventListener('change', calculator.changeDecimals.bind(calculator))