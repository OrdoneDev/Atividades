#!/usr/bin/env node

class estudante {
    constructor(nome, email, ra, curso, disciplinas){
        this.nome = nome
        this.email = email
        this.ra = ra
        this.curso = curso
        this.disciplinas = disciplinas
    }
}

const aluno1 = new estudante("David", "david@email.com", "777", "Analise e desenvolvimento de sistemas", ["Sistemas Operacionais", "Programação", "Banco de Dados"])
const aluno2 = new estudante("Everton", "everton@email.com", "888", "Analise e desenvolvimento de sistemas", ["PTG", "Redes de computadores", "Ingles"])

console.log(aluno1)
console.log(aluno2)

/*
*/