
function mostrar()
{
	
    var cotizacionDolar;
	var cotizacionDolarBlue;
	var promedioDolar;
	var promedioDolarBlue;
	var contadorDolar = 0;
	var acumuladorDolar = 0;
	var acumuladorDolarBlue = 0;
	var dolarMasAlto;
	var dolarBlueMasBajo;
	var flag = 0;
	var mayorCotizacion;

	for (i = 0; i < 5; i++) {

		do {
			cotizacionDolar = parseInt(prompt("Ingrese el valor del dolar oficial: "));
		} while (cotizacionDolar <= 0);

		do {
			cotizacionDolarBlue = parseInt(prompt("Ingrese el valor del dolar blue"));
		} while (cotizacionDolarBlue <= 0);

		if (flag == 0) {
			dolarMasAlto = cotizacionDolar;
			dolarBlueMasBajo = cotizacionDolarBlue;
			flag = 1;
		}

		if (dolarMasAlto < cotizacionDolar) {
			dolarMasAlto = cotizacionDolar;
		}
		if (dolarBlueMasBajo > cotizacionDolarBlue) {
			dolarBlueMasBajo = cotizacionDolarBlue;
		}

		contadorDolar++;
		acumuladorDolar += cotizacionDolar;
		acumuladorDolarBlue += cotizacionDolarBlue;

	}

	promedioDolar = acumuladorDolar / contadorDolar;
	promedioDolarBlue = acumuladorDolarBlue / contadorDolar;

	if (promedioDolar > promedioDolarBlue) {
		mayorCotizacion = "Dolar oficial"
	} else {
		mayorCotizacion = "Dolar Blue"
	}

	document.getElementById("txtIdCoti").value = mayorCotizacion;
	document.getElementById("txtIdCotiOficial").value = dolarMasAlto;
	document.getElementById("txtIdCotiBlue").value = dolarBlueMasBajo;
}

}
