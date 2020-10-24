let saldoInicial = parseFloat(prompt('Qual seu saldo atualmente? '))
let produto = parseFloat(prompt('Qual o valor da compra que você deseja realizar? '))
if (saldoInicial >= produto) { parseFloat(alert(`Foi possivel efetuar a compra, seu saldo atual é de ${saldoInicial - produto} reais.`))
} else if (saldoInicial < produto) { alert("Seu saldo é insuficiente para realizar essa compra.")
}