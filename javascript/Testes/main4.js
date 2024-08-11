// Dados do Candidato

var idade = 25
var experiênciaAnos = 5
var nivelEducação = "Superior"
var possuiCertificado = "True"


// Critérios Elegibilidade

var idadeMiníma = 18
var experiênciaMinímaAnos = 3
var nivelEducaçãoMiníno = "Superior"
var certificadoObrigatório = "True"

// Confirmação se atende os requisitos

var elegivel =
idade >= idadeMiníma &&
experiênciaAnos >= experiênciaMinímaAnos &&
(nivelEducação === nivelEducaçãoMiníno || possuiCertificado) &&
(!certificadoObrigatório || possuiCertificado);


// Saída do resultado
console.log("Elegível para a vaga? " + elegivel)

