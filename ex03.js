let conversaoRealDolar = 5.25; 
let valorReal = 100;
let cotacaoDolar = valorReal / conversaoRealDolar;  
console.log(`O valor de R$ ${valorReal} convertido para dólar é: R$ ${cotacaoDolar.toFixed(2)}`)
// Se cotacaoDolar for declarada como string (ex: "5.00"),
// pode causar problemas em operações matemáticas.
// O ideal é sempre manter valores numéricos como Number.