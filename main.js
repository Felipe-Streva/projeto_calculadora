let calculator = {
    display: '',
    acc: '',
    result: '',
    decimals: 2,
    radiansToDegree: true,
    addNumber(event){
        this.display.textContent += event.target.textContent;
        this.acc += event.target.textContent;
    },
    addSinal(event){
        this.display.textContent += event.target.textContent ;
        this.acc += event.target.textContent;
    },
    changeDecimals(event){
        this.decimals = event.target.value;
        label.textContent = event.target.value;
    },
    equals(){
        this.acc = eval(this.acc).toFixed(this.decimals);
        this.result.textContent = this.acc
        this.display.textContent = '';
    },
    correct(){
        this.display.textContent = this.display.textContent.substring(0,(this.display.textContent.length -1))
        this.acc = this.acc.substring(0,(this.acc.length -1))
    },
    clear(){
        this.display.textContent = ''
        this.acc = ''
        this.result.textContent = ''
    },
    addSQRT(event){
        this.display.textContent += event.target.textContent + '(';
        this.acc += 'Math.sqrt(';
    },
    addPower(event){
        this.display.textContent += event.target.textContent;
        this.acc += '**';
    },
    pi(event){
        this.display.textContent += event.target.textContent;
        this.acc += 'Math.PI';
    },
    trigonometry(event){
        if(this.radiansToDegree){
            this.display.textContent += event.target.textContent + '(';
            this.acc += `Math.${event.target.textContent}(`;
        } else {
            this.display.textContent += event.target.textContent + '(';
            this.acc += `Math.${event.target.textContent}(Math.PI/180*`;
        }
    },
    radDeg(){
        if(this.radiansToDegree==true){
            this.radiansToDegree = false;
            buttonRadDeg.textContent = 'Deg'
            console.log(this.radiansToDegree)
            console.log(this.radiansToDegree.textContent)
        }else {
            this.radiansToDegree = true;
            buttonRadDeg.textContent = 'Rad'
    }}
};

calculator.display = document.querySelector("#display");
calculator.result = document.querySelector("#result");


//if have time, change to forEach function
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
let buttonDot = document.querySelector("#dot");
let buttonOpenParen = document.querySelector("#numberOpenParan");
let buttonCloseParen = document.querySelector("#numberCloseParen");
let buttonSum = document.querySelector("#sum");
let buttonSubtract = document.querySelector("#subtract");
let buttonSplit = document.querySelector("#split");
let buttonMultiply = document.querySelector("#multiply");
let buttonEquals = document.querySelector("#equals");
let inputDecimals = document.querySelector("#decimals");
let buttonCorrect = document.querySelector("#correct");
let buttonClear = document.querySelector("#clear");
let buttonSQRT = document.querySelector("#sqrt");
let buttonPower = document.querySelector("#power");
let buttonPi = document.querySelector("#pi");
let buttonSin = document.querySelector("#sin");
let buttonCos = document.querySelector("#cos");
let buttonTan = document.querySelector("#tan");
let buttonRadDeg = document.querySelector("#radDeg");
let label = document.querySelector("#label");

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
buttonDot.addEventListener('click', calculator.addNumber.bind(calculator))
buttonOpenParen.addEventListener('click', calculator.addNumber.bind(calculator))
buttonCloseParen.addEventListener('click', calculator.addNumber.bind(calculator))

buttonSQRT.addEventListener('click', calculator.addSQRT.bind(calculator))
buttonPower.addEventListener('click', calculator.addPower.bind(calculator))

buttonSum.addEventListener('click', calculator.addSinal.bind(calculator))
buttonSubtract.addEventListener('click', calculator.addSinal.bind(calculator))
buttonSplit.addEventListener('click', calculator.addSinal.bind(calculator))
buttonMultiply.addEventListener('click', calculator.addSinal.bind(calculator))
buttonEquals.addEventListener('click', calculator.equals.bind(calculator))

inputDecimals.addEventListener('input', calculator.changeDecimals.bind(calculator))

buttonCorrect.addEventListener('click', calculator.correct.bind(calculator))
buttonClear.addEventListener('click', calculator.clear.bind(calculator))

buttonPi.addEventListener('click', calculator.pi.bind(calculator))

buttonSin.addEventListener('click', calculator.trigonometry.bind(calculator))
buttonCos.addEventListener('click', calculator.trigonometry.bind(calculator))
buttonTan.addEventListener('click', calculator.trigonometry.bind(calculator))
buttonRadDeg.addEventListener('click', calculator.radDeg.bind(calculator))