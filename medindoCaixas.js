let inputLengthBox = document.getElementById('lengthBox');
let inputWidthBox = document.getElementById('widthBox');
let inputHeightBox = document.getElementById('heightBox');

let totalLength = document.getElementById('totalLength')
let totalWidth = document.getElementById('totalWidth')

let tipoDeCaixa = document.getElementById('tiposDeCaixa')

const transpasseNormal = 10;
const transpasse30 = 60;
const abaEnvoltorio = 80;
const abaMaleta = 70;
const abaEnvoltorio01Tampa = 60;
const somaAltura = 5;

let resultBox = []

let isInvalid = false;

function typeOfBox(boxes){
    
    let lengthBox = parseInt(inputLengthBox.value);
    let widthBox = parseInt(inputWidthBox.value);
    let heightBox = parseInt(inputHeightBox.value);

    if (lengthBox <= 0 || widthBox <= 0 || heightBox <= 0 || isNaN(lengthBox) || isNaN(widthBox) || isNaN(heightBox)){
        isInvalid = true;
    }   else {
        

        isInvalid = false;

        switch(boxes){
            case 'maleta':
                calcMaleta(lengthBox, widthBox, heightBox);
                console.log('maleta');
            break;
                
            case 'maletaTTotal':
                calcMaletaTTotal(lengthBox, widthBox, heightBox);
                console.log('maletaTTOTAL');
            break;

            case 'maletaT030':
                calcMaletaT30(lengthBox, widthBox, heightBox);
                console.log('maletaT030');
            break;

            case 'env1tampa':
                calcEnv01Tampa(lengthBox, widthBox, heightBox);
                console.log('ENV 01 TAMPA');
            break;

            case 'envNormal':
                calcEnvNormal(lengthBox, widthBox, heightBox);
                console.log('Env NORMAL');
            break;

            case 'envT030':
                calcEnvTransp30(lengthBox, widthBox, heightBox);
                console.log('ENV T 030');
            break;
                
        }
    }
}
//Calculando medidas de caixas

function calcMaleta(length,width,height) {
    const riscador = (width+transpasseNormal)/2 + (height+somaAltura) + (width+transpasseNormal)/2;
    const impressora = length + width + length + width + abaMaleta;

    resultBox = [riscador , impressora]
    return resultBox
}

function calcMaletaTTotal(length, width, height){
    const riscador = width + (height+somaAltura) + width
    const impressora = length + width + length + width + abaMaleta;
    
    resultBox = [riscador , impressora]
    return resultBox
}

function calcMaletaT30(length,width,height) {
    const riscador = (width + transpasse30)/2 + (height+somaAltura) + (width + transpasse30)/2;
    const impressora = length + width + length + width + abaMaleta;

    resultBox = [riscador , impressora]
    return resultBox
}

function calcEnvNormal(length, width, height) {
    const riscador = (width+transpasseNormal)/2 + (height+somaAltura) + (width+somaAltura) + (height+somaAltura) + (width+transpasseNormal)/2;
    const impressora = abaEnvoltorio + height + length + height + abaEnvoltorio;

    resultBox = [riscador , impressora]
    return resultBox
}

function calcEnv01Tampa(length, width, height) {
    const riscador = (width+somaAltura) + (height+somaAltura) + (width+somaAltura) + (height+somaAltura) + abaEnvoltorio01Tampa;
    const impressora = abaEnvoltorio + height + length + height + abaEnvoltorio;

    resultBox = [riscador , impressora]
    return resultBox
}

function calcEnvTransp30(length, width, height) {
    const riscador =  (width+transpasse30)/2 + (height+somaAltura) + (width+somaAltura) + (height+somaAltura) + (width+transpasse30)/2;
    const impressora = abaEnvoltorio + height + length + height + abaEnvoltorio;

    resultBox = [riscador , impressora]
    return resultBox
}


// FUNCTION OF BUTTON

function getMeasure(){
    tipoDeCaixa = document.getElementById('tiposDeCaixa').value
    
    typeOfBox(tipoDeCaixa);
    isInvalid ? msgError() : setTimes(resultBox[0], resultBox[1]);
    
}

function setTimes(resultLength, resultWidth){
    totalLength.textContent = resultLength 
    totalWidth.textContent =  resultWidth

}


function msgError(){
    totalLength.textContent = 'VALOR ';
    totalWidth.textContent = 'INVÁLIDO';
}