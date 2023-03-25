import express from "express"
import PessoaController from "../controllers/pessoasController.js"

const router = express.Router()

router
    .get('/pessoas', PessoaController.listarPessoas)
    .get('/pessoas/busca', PessoaController.listarPessoaByName)

export default router