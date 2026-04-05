let nomeVendedor = "Artur"
let salarioBase = 2000;
let totalVendasMes = 5000;
let comissao = 0.12 * totalVendasMes;
let salarioFinal = salarioBase + comissao;
console.log(`O vendedor ${nomeVendedor} receberá R$ ${salarioFinal.toFixed(2)} este mês, sendo R$ ${comissao.toFixed(2)} de bônus`)

