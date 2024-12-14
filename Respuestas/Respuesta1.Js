function Res_Ejerc1 (){
    Año= ["Enero","Febrero", "Marzo", "Abril","Mayo", "Junio", "Julio","Agosto", "Septiembre", "Octubre","Noviembre", "Diciembre"]

    document.write("<h2> Meses del año: </h2>")

        for (const Mes of Año) {
           document.write("<ul>")
                document.write("<li>")
                    document.write(Mes)
                document.write("</li>")
           document.write("</ul>")
        }
    }
  
     
  
  document.getElementById("btn1").addEventListener ("click",Res_Ejerc1)