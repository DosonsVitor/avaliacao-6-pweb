document.querySelector("form").addEventListener("submit", event => {
	
	calcularFatorial();

	event.preventDefault();
});

function calcularFatorial()
{
	let numero = form.numero.value;
	var resultado = 1;

	for(var i = numero; i > 0; i--)
	{
		resultado *= i;
	}

	document.querySelector(".resultado").innerHTML = "O fatorial de "+numero+" é "+resultado;
}