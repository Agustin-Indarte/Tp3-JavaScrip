function Res_Ejerc3() {
    let sumas = [];
    let apariciones = {}; // Objeto para contar las apariciones de cada suma
  
    // Simular las tiradas de dados
    for (let i = 0; i < 50; i++) {
      let dado1 = Math.ceil(Math.random() * 6); // Número entre 1 y 6
      let dado2 = Math.ceil(Math.random() * 6);
      let suma = dado1 + dado2;
  
      sumas.push(suma);
  
      if (apariciones[suma] === undefined) {
        apariciones[suma] = 0; // Inicializar la suma en 0 si no existe
      }
      apariciones[suma] += 1; // Incrementar el contador
    }
  
    // Mostrar todas las tiradas
    document.write("LISTA DE TIRADAS Y SU VALOR<br>");
    sumas.forEach((suma, index) => {
      document.write(`Tirada N°${index + 1} // Suma: ${suma} <br>`);
    });
  
    // Mostrar la cantidad de apariciones en una tabla
    document.write("<br><strong>APARICIONES DE LAS SUMAS:</strong><br>");
    document.write("<table border='1'><tr><th>Suma</th><th>Apariciones</th></tr>");
  
    for (let suma in apariciones) {
      document.write(`<tr><td>${suma}</td><td>${apariciones[suma]}</td></tr>`);
    }
    document.write("</table>");
  }
     
document.getElementById("btn3").addEventListener ("click",Res_Ejerc3)