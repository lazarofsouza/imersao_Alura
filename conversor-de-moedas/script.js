valorEmDolarTexto = prompt ("Qual o valor em Rial você quer converter")

valorEmDolarNumero = parseFloat(valorEmDolarTexto)

valorEmReal = valorEmDolarNumero * 1.55
valorDecimal = valorEmReal.toFixed(2)

alert(valorEmReal)