function calcular()
{
	var a = document.getElementById("a").value;
	var b = document.getElementById("b").value;
	var salida = document.getElementById("salida");
	
	var suma=parseInt(a)+parseInt(b);

	 if (a == 10 || b == 10 ) 
    {
		salida.innerHTML = "1";
	
	}
	else if	(suma == 10)
	{
		salida.innerHTML = "1";
	}
	else 
	{
		salida.innerHTML = "0";
	}

}