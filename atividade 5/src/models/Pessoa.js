class Pessoas {
    constructor(){
        this.lista = [
            {
                id: 1,
                nome: "David",
                email: "david@email.com",
                idade: 28,
                hobbies: ["Hobbie X", "Hobbie Y", "Hobbie Z"]
            },
            {
                id: 2,
                nome: "Ana",
                email: "ana@email.com",
                idade: 48,
                hobbies: ["Hobbie A"]
            },
            {
                id: 3,
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
    
    getById(id){
        return this.lista.find(element => parseInt(element.id) === parseInt(id));
    }
}

const Pessoa = new Pessoas()

export default Pessoa