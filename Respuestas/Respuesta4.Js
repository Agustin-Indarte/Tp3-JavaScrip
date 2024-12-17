function Res_Ejerc4() {
    let numero = +prompt("Por favor, ingrese un numero")

    function resultado(numero) {
      if (numero%2==0){
        document.write(`El número ${numero} es par`)
      } else {
        document.write(`El número ${numero} es impar`)
      }
    }

    if (numero === null || numero =="" || isNaN(numero)){
      alert("Por favor, ingrese un numero valido")
    } else {
      resultado(numero)
    }

}
     
document.getElementById("btn4").addEventListener ("click",Res_Ejerc4)