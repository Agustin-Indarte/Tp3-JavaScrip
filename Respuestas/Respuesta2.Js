function Res_Ejerc2 (){
    let continuar;
    let ciudades=[]

    do {
        let ciudad = prompt("Por favor, ingrese una ciudad:").trim()
        
        if (ciudad===null || ciudad==="" || ciudad=="0" || ciudad==undefined){
            continuar=false
        } else {
            ciudades.push(ciudad)
            continuar =confirm("¿Desea continuar?")
        }
    } while (continuar);
    
    document.write("<h2> Ciudades </h2>")
    document.write(ciudades)
    document.write("<br><br>")

    document.write("<h2> Longitud de ciudades: </h2>")
    document.write(`<p>Tu lista tiene ${ciudades.length} items</p>`)
    
    document.write("<h2> Pociciones de ciudades: </h2>")
    document.write("<ul>")

        if (ciudades.length>=1) {
            document.write(`<li>El 1er item de ciudades es: ${ciudades[0]} </li>`)
        } else {
            document.write ("No existe un item en esta posición")
        }

        if (ciudades.length>=3) {
            document.write(`<li>El 3er item de ciudades es: ${ciudades[2]} </li>`)
        } else {
            document.write ("No existe un item en esta posición")
        }

        if (ciudades.length>=1) {
            document.write(`<li>El ultimo item de ciudades es: ${ciudades[ciudades.length-1]} </li>`)
        } else {
            document.write ("No existe un item en esta posición")
        }

    document.write("</ul>")

    ciudades.push("Paris")

    if (ciudades.length>=2) {
        document.write(`<li>El 2do item de ciudades es: ${ciudades[1]} </li>`)
    } else {
        document.write ("No existe un item en esta posición")
    }

    ciudades[1]="Barcelona"

    document.write(ciudades)



    }
  
     
  
  document.getElementById("btn2").addEventListener ("click",Res_Ejerc2)