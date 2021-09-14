var notaUm = parseInt(prompt('Digite a primeira Nota:'))
var notaDois = parseInt(prompt('Digite a segunda Nota:'))
var notaTres = parseInt(prompt('Digite a terceira Nota:'))
var notaQuatro = parseInt(prompt('Digite a quarta Nota:'))
var notaFinal = (notaUm + notaDois + notaTres + notaQuatro)/4
var notaFixada = notaFinal.toFixed(1)

if (notaFinal >= 7)
    window.alert('Aprovado')
else5
    window.alert('Reprovado')
    