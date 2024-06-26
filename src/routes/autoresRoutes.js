import express from "express";
import AutorController from "../controllers/autorController.js";

const routes = express.Router();

routes.get("/autores", AutorController.listaAutor);
routes.post("/autores", AutorController.cadastraAutor);
routes.get("/autores/:id", AutorController.listaAutorPorId);
routes.put("/autores/:id", AutorController.atualizaAutor);
routes.delete("/autores/:id", AutorController.deletaAutor);

export default routes;