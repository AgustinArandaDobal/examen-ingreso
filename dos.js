{

let nombreAlumno;
let apellidoAlumno;
let materiaCursada;
let notaPrimerCuatri;
let notaSegundoCuatri;
let numeroComision;
let promedioPrimerCuatri;
let promedioSegundoCuatri;
let acumuladorNotasPrimerCuatri = 0;
let contadorAlumnos = 0;
let acumuladorNotasSegundoCuatri = 0;
let notaMenorPrimerCuatri;
let nombreMenorNotaPrimerCuatri;
let apellidoMenorNotaPrimerCuatri;
let comisionMenorNotaPrimerCuatri;
let flag = 0;
let promocion;
let materiaMasPromocionada;
let contadorNotasProgramacion = 0;
let contadorNotasMatematica = 0;
let contadorNotasIngles = 0;
let condicionSalida;
const NOTA_PROMO = 6;

do {
  nombreAlumno = prompt("Ingrese el nombre del Alumno.");
  apellidoAlumno = prompt("Ingrese el apellido del alumno");
  
  do {
    materiaCursada = prompt("Ingrese la materia cursada. 'programacion' o 'matematica' o 'ingles'");
  } while (materiaCursada != "programacion" && materiaCursada != "matematica" && materiaCursada != "ingles");
  
  do {
    notaPrimerCuatri = parseInt(prompt("Ingrese la nota del primer cuatrimestre. 0 a 10"));
  } while (isNaN(notaPrimerCuatri) || notaPrimerCuatri < 0 || notaPrimerCuatri > 10);
  
  do {
    notaSegundoCuatri = parseInt(prompt("Ingrese la nota del Segundo cuatrimestre. 0 a 10"));
  } while (isNaN(notaSegundoCuatri) || notaSegundoCuatri < 0 || notaSegundoCuatri > 10);
  
  do {
    numeroComision = parseInt(prompt("Ingrese el numero de comision. 1000 a 2000"));
  } while (isNaN(numeroComision) || numeroComision < 1000 || numeroComision > 2000);
  
  acumuladorNotasPrimerCuatri += notaPrimerCuatri;
  acumuladorNotasSegundoCuatri += notaSegundoCuatri;
  contadorAlumnos++;
  
  if (flag == 0 || notaPrimerCuatri < notaMenorPrimerCuatri) {
    notaMenorPrimerCuatri = notaPrimerCuatri;
    nombreMenorNotaPrimerCuatri = nombreAlumno;
    apellidoMenorNotaPrimerCuatri = apellidoAlumno;
    comisionMenorNotaPrimerCuatri = numeroComision;
    flag = 1;
  }
  
  promocion = (notaMenorPrimerCuatri + notaSegundoCuatri) / 2;
  if (promocion >= 6) {
    if (materiaCursada == "programacion") {
      contadorNotasProgramacion++;
    } else if (materiaCursada == "matematica")  {
      contadorNotasMatematica++;
    } else {
      contadorNotasIngles++;
    }
  }
  
  condicionSalida = prompt("Desea seguir ingresando alumnos? 'si' o 'no'");
  
} while (condicionSalida == "si");

promedioPrimerCuatri = acumuladorNotasPrimerCuatri / contadorAlumnos;
promedioSegundoCuatri = acumuladorNotasSegundoCuatri / contadorAlumnos;

alert("El promedio de notas del primer cuatrimestr es: " + promedioPrimerCuatri + " y el promedio del segundo cuatrimestre es: " + promedioSegundoCuatri);

alert("El alumno con menor nota del primer cuatrimestre se llama " + nombreMenorNotaPrimerCuatri + " " + 
apellidoMenorNotaPrimerCuatri + " y es de la comision " + comisionMenorNotaPrimerCuatri);

if (contadorNotasProgramacion > contadorNotasIngles && contadorNotasProgramacion > contadorNotasMatematica) {
  materiaMasPromocionada = "Programacion";
} else if (contadorNotasMatematica > contadorNotasIngles) {
  materiaMasPromocionada = "Matematica";
} else {
  materiaMasPromocionada = "Ingles";
}

alert("La materia mas promocionada es " + materiaMasPromocionada);

}