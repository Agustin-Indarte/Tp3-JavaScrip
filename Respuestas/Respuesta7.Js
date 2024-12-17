function Res_Ejerc7() {
   
   let numero = parseInt(prompt("Por favor, ingrese un numero"))

    function tablaMultiplicar(numero){
        document.write(
            `<table border ="1" cellspacing="0" cellspadding ="5">
            <thead>
            <tr>
            <th colspan="2"> Tabla de multiplicar del numero: ${numero} </th>
            </tr>
            </thead>
            <tbody>     
        `)

        for (let i = 1; i <= 10; i++) {
            document.write(`
                <tr>
                <td>${numero}*${i}</td>
                <td>${numero*i}</td>
                </tr>
            `)
        }

        document.write(`
            </tbody>
            </table>
        `)
    }

    if (isNaN(numero)){
        alert("Por favor, ingresa un numero valido")
    } else{
        tablaMultiplicar(numero)
    }


}
     
document.getElementById("btn7").addEventListener ("click",Res_Ejerc7)