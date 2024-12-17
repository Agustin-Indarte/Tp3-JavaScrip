function Res_Ejerc6() {
   
  let base = +prompt("Por favor, ingrese la base del rectangulo:")
  let altura = +prompt("Por favor, ingrese la altura del rectangulo:")
  
  function perimetro (base,altura){
    perimetro = 2*(base+altura)
    document.write (`El perimetro de tu rectangulo es: ${perimetro}`)
  }

  if (base === null || base =="" || isNaN(base) || altura === null || altura =="" || isNaN(altura)){
    alert("Por favor, ingrese un numero valido")
  } else {
    perimetro(base,altura)
  }

}
     
document.getElementById("btn6").addEventListener ("click",Res_Ejerc6)