$("#cpf").mask("000.000.000-00");

document.querySelector("form").addEventListener("submit", event => {
	
	verificadados();

	event.preventDefault();
});

function verificadados()
{
	let cpf = formaluno.cpf.value.replace(/[.-]/g, "");
	let datanasc = formaluno.datanasc.value;

	let validaIdade = calculaIdade(datanasc) >= 14 ? true : false ;

	if(!validaIdade)
	{
		document.querySelector(".erroIdade").innerHTML = "O aluno tem menos de 14 anos!";
	}
	else
	{
		document.querySelector(".erroIdade").innerHTML = "";
	}

	if(!validaCpf(cpf))
	{
		document.querySelector(".erroCpf").innerHTML = "CPF invalido!";
	}
	else
	{
		document.querySelector(".erroCpf").innerHTML = "";
	}
}

function validaCpf(cpf)
{
	let soma = [0, 0];
	for(var i = 0; i<9; i++)
	{
		soma[0] += cpf[i] * (i+1);
		soma[1] += cpf[i] * i;
	}

	soma[1] += cpf[9] * 9;

	if(soma[0]%11 == cpf[9] && soma[1]%11 == cpf[10])
	{
		return true;
	}
	else
	{
		return false;
	}
}

function calculaIdade(datanasc)
{
	let data_atual = new Date();
	let ano = datanasc.substring(0, 4), mes = datanasc.substring(5, 7), dia = datanasc.substring(8, 10);
	let ano_atual = data_atual.getFullYear(), mes_atual = data_atual.getMonth()+1, dia_atual = data_atual.getDate();

	let idade = ano_atual - ano;

	if(mes > mes_atual)
	{
		idade--;
	}
	else if(mes == mes_atual && dia > dia_atual)
	{
		idade--;
	}

	return idade;
}