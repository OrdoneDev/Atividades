import express from "express"
import pessoas from "./PessoasRoutes.js"

const routes = (app) => {
    app.route("/").get((_, res) => {
        res.status(200).send({titulo: `Página inicial atividade express`})
    })

    app.use(
        express.json(),
        pessoas
    )
}

export default routes