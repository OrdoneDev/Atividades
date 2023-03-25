import pessoas from "../models/Pessoa.js"

class PessoaController{
    static listarPessoaByName = (req, res) => {
        const { id } = req.params

        try{
            const pessoa_return = pessoas.getById(id)
            res.status(200).json(pessoa_return)
        }catch(error){
            res.status(500).send({message: `${error.message} - Ocorreu um erro na função de listar pessoa pelo nome!`})
        }
    }

    static listarPessoas = (_, res) => {
        try{
            const pessoas_return = pessoas.getPessoas()
            res.status(200).json(pessoas_return)
        }catch(error){
            res.status(500).send({message: `${error.message} - Ocorreu um erro na função de listar pessoas!`})
        }
    }
}

export default PessoaController