class Pessoas {
    constructor(){
        this.lista = [
            {
                nome: "David",
                email: "david@email.com",
                idade: 28,
                hobbies: ["Hobbie X", "Hobbie Y", "Hobbie Z"]
            },
            {
                nome: "Ana",
                email: "ana@email.com",
                idade: 48,
                hobbies: ["Hobbie A"]
            },
            {
                nome: "Adelaide",
                email: "adelaidemildias@email.com",
                idade: 48,
                hobbies: ["Hobbie $", "Hobbie O.O"]
            }
        ]
    }

    getPessoas(){
        return this.lista
    }
    
    getByName(nome){
        return this.lista.find(element => element.nome === nome);
    }
}

const Pessoa = new Pessoas()

export default Pessoa