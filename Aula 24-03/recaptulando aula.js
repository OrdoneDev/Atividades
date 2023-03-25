const pessoa1 = {
    nome: "Teste",
    email: "teste@teste.com.br",
    hobbies: [
        "Hobby 1", "Hobby 2"
    ],
    falar: function() {
        console.log("Oi")
    }
}

console.log(pessoa1.nome)
pessoa1.falar()
console.log(pessoa1.hobbies.length)

pessoa1.cpf = 10000000

console.log(pessoa1)

class Pessoa {
    constructor(nome, email, hobbies){
        this.nome = nome
        this.email = email
        this.hobbies = hobbies
    }

    falar(){
        console.log("Falo diferente pq sou diferente.")
    }
}

const pessoa2 = new Pessoa("Teste 2", "email@email.com", ["Hobby X", "Hobby Y"])

console.log(pessoa2)
console.log(pessoa2.falar())