document.getElementById("button").addEventListener("click", function() {
    var nome = document.getElementById('nome').value;
    var renda = document.getElementById('renda').value;
    var valor_financiamento = document.getElementById('valor_financiamento').value;
    var valor_entrada = document.getElementById('valor_entrada').value;
    var i = document.getElementById('juros').value;
    var n = document.getElementById('prestacoes').value;
    var resultado = document.getElementById('resultado');

if (nome != "" && renda != "" && valor_financiamento != "" && valor_entrada != "" && i != "" && valor_financiamento != "" && n != "" ) {
    resultado.textContent = "";
    //var parcela = ((valor_financiamento - valor_entrada)/prestacoes)*juros ;
var vp = valor_financiamento - valor_entrada;
var i = i/100;
var pmt = (((((1+i)**n)*i)*vp)/(((1+i)**n)-1)).toFixed(2);
    resultado.textContent = pmt ;
    if( pmt <= ((renda * 30)/100)){
        //console.log("menor que 30%");
        resultado.textContent = "Aprovado!" + " O valor da parcela será de: R$" + pmt +  " Durante:" + n + "meses" ;
    }
    else{
        //console.log(parcela);
        //console.log((renda * 30)/100);
        resultado.textContent = "Reprovado!";
    }
}
else{
    resultado.textContent = 'Para calcular, e obrigatorio o preenchimento de todos os campos!';
}
});

