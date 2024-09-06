function ApertarBotao(){
    alert("Alô Mundo");
}

function ApresentarNumero(){
    let numero = document.getElementById("numero");
    alert("O numero é " + numero.value);
}

function SomarNum(){
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");

    alert( "A soma é: " + (Number(num1.value) + Number(num2.value)))

}

function MediaNum(){
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");
    let num3 = document.getElementById("num3");
    let num4 = document.getElementById("num4");

    alert("A média do ano é: " + (Number(num1.value) + Number(num2.value) + Number(num3.value) + Number(num4.value)) / 4)
}

function M_para_CM(){
    let num1 = document.getElementById("num1")
    alert("A conversão em CM é: " + (Number(num1.value) * 100))
}

function CalcArea(){
    let num1 = document.getElementById("num1")
    alert("A área é: " + ((Math.PI * (Number(num1.value)**2))))
}

function CalcDobroAreaQuadrado(){
    let num1 = document.getElementById("num1")
    alert("O dobro da área é " + (Number(num1.value)**2) * 2)
}

function CalcSalHr(){
    let num1 = document.getElementById("num1")
    let num2 = document.getElementById("num2")
    alert("Seu salario é: " + (Number(num1.value) * Number(num2.value)))
}

function ConverteEmGraus(){
    let num1 = document.getElementById("num1")
    alert("Essa temperatura em Celius é: " + (5 *((Number(num1.value - 32)) / 9)))
}

function ConverteEmFahrenheit (){
    let num1 = document.getElementById("num1")
    alert("Essa temperatura em Fahrenheit é: " + Number((num1.value) * 9/5) + 32)
}

function Ex11(){ 
    let num1 = document.getElementById("num1")
    let num2 = document.getElementById("num2")
    let num3 = document.getElementById("num3")
    alert("a. " + (2*parseInt(num1.value) * ((1/2) * parseInt(num2.value))) + "\n" +
          "b. " + ((parseInt(num1.value) * 3) + (Number(num3.value))) + "\n" +
          "c. " + (Number(num3.value) ** 3))
}

function Ex12(){
    let num1 = document.getElementById("num1")
    alert("Peso ideal pra homi: " + ((72.7 * Number(num1.value)) - 58) + "\n" +
          "Peso ideal pra muie: " + ((62.1 * Number(num1.value)) - 44.7))
}

function Ex13(){
    let num1 = document.getElementById("num1")
    let num2 = document.getElementById("num2")
    let SalBruto = Number(num1.value) * Number(num2.value)
    let DescIR = SalBruto * 0.11
    let DescINSS = SalBruto * 0.08
    let DescSindi = SalBruto * 0.05
    let SalLiquido = SalBruto - DescIR - DescINSS - DescSindi
    
    alert("Salário Bruto: " + Number(SalBruto) + "\n" +
          "Desconto IR: " + Number(DescIR) + "\n" +
          "Desconto INSS: " + Number(DescINSS) + "\n" +
          "Desconto Sindicato: " + Number(DescSindi) + "\n" +
          "Salário Líquido: " + Number(SalLiquido))
}
