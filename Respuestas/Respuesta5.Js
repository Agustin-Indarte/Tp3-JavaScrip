function Res_Ejerc5() {
   
  let texto = prompt("Por favor, ingrese un texto:")
  let textoMayuscula = texto.toUpperCase()
  let textoMinuscula = texto.toLowerCase()

  function composicion (texto){
    if (texto === textoMayuscula){
      document.write (`El texto: "${texto}" esta escrito completamente en Mayusculas`)
    } else if (texto === textoMinuscula){
      document.write (`El texto: "${texto}" esta escrito completamente en Minusculas`)
    } else {
      document.write (`El texto: "${texto}" esta escrito con Mayusculas y Minusculas`)
    }
  }

  if (texto === null || texto =="" || !isNaN(texto)){
    alert("Por favor, ingrese un texto valido")
  } else {
    composicion(texto)
  }

}
     
document.getElementById("btn5").addEventListener ("click",Res_Ejerc5)