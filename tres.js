function mostrar()
{
	let nombreCompetidor;
	let numeroCompetidor;
	let cilindradaMoto;
	let marcaMoto;
	let edadCompetidor;
	let tiempoVueltaUno;
	let tiempoVueltaDos;
	let tiempoVueltaTres;
	let posicionCarrera;
	let promedioTiempos;
	let acumuladorTiempos = 0;
	let competidorMasRapido;
	let numeroCompetidorMasRapido;
	let contadorMotosHondaEntrelosDiez = 0;
	let contadorCompetidores = 0;
	let acumuladorTiemposVueltaUno = 0;
	let acumuladorTiemposVueltaDos = 0;
	let acumuladorTiemposVueltaTres = 0;
	let contadorMotosCilidrada200 = 0;
	let acumuladorTiemposCilindrada200 = 0;
	let promedioTiemposCilindrada200;
	let promedioVueltaUno;
	let promedioVueltaDos;
	let promedioVueltaTres;
	let flag = 0;
	let condicionSalida;


	do {
		nombreCompetidor = prompt("Ingrese el nombre del competidor");
		
		numeroCompetidor = prompt("Ingrese el numero de competidor");

		cilindradaMoto = parseInt(prompt("Ingrese la cilindrada de la moto"));

		do {
			marcaMoto = prompt("Ingrese la marca de la moto. 'honda' o 'yamaha' o 'suzuki'");
		} while (marcaMoto != "honda" && marcaMoto != "yamaha" && marcaMoto != "suzuki");
		
		do {
			edadCompetidor = parseInt(prompt("Ingrese la edad del competidor. Mayor a 18"));
		} while (edadCompetidor < 18);
		
		contadorCompetidores++;
		
		tiempoVueltaUno = parseInt(prompt("Ingrese el tiempo de la vuelta 1"));

		tiempoVueltaDos = parseInt(prompt("Ingrese el tiempo de la vuelta 2. en segundos"));

		tiempoVueltaTres = parseInt(prompt("Ingrese el tiempo de la vuelta 3. en segundos"));

		posicionCarrera = parseInt(prompt("Ingrese la posicion final en la carrera"));
		
		acumuladorTiempos = tiempoVueltaUno + tiempoVueltaDos + tiempoVueltaTres
		promedioTiempos = acumuladorTiempos / 3;
		
		if (flag == 0 || promedioTiempos < competidorMasRapido) {
			competidorMasRapido = promedioTiempos;
			numeroCompetidorMasRapido = numeroCompetidor;
			flag = 1;
		}
		
		if (marcaMoto == "honda" && posicionCarrera <= 10) {
			contadorMotosHondaEntrelosDiez++;
		}
		
		acumuladorTiemposVueltaUno += tiempoVueltaUno;
		acumuladorTiemposVueltaDos += tiempoVueltaDos;
		acumuladorTiemposVueltaTres += tiempoVueltaTres;
		
		if (cilindradaMoto == 200) {
			acumuladorTiemposCilindrada200 += acumuladorTiempos;
			contadorMotosCilidrada200++;
		}
		
		condicionSalida = prompt("Desea seguir ingresando competidores? 'si' o 'no'");
	} while (condicionSalida == "si");

	promedioVueltaUno = acumuladorTiemposVueltaUno / contadorCompetidores;
	promedioVueltaDos = acumuladorTiemposVueltaDos / contadorCompetidores;
	promedioVueltaTres = acumuladorTiemposVueltaTres / contadorCompetidores;
	
	alert("El competidor mas rapido en promedio fue el numero: " + numeroCompetidorMasRapido);
	alert("la cantidad de motos Honda entre los primeros diez es: " + contadorMotosHondaEntrelosDiez);
	alert("El promedio total de la vuelta 1 es: " + promedioVueltaUno 
	      + " .El de la 2 es: " + promedioVueltaDos + " .El de la 3 es: " + promedioVueltaTres);

	if (contadorMotosCilidrada200 > 0) {
		promedioTiemposCilindrada200 = acumuladorTiemposCilindrada200 / contadorMotosCilidrada200;
		alert("El promedio de las motos cilindrada 200 es: " + promedioTiemposCilindrada200);
	} else {
		alert("No hubo motos cilindrada 200");
	}

}
