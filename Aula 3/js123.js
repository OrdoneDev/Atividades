const a = Number(prompt("Informe o seu sálario: "))
const b = Number(prompt("Informe a porcentagem: "))

let resultado = a + a * (b/100)
console.log(resultado)

document.write(
    `<strong>
        ${resultado}
        <strong/>`
    )