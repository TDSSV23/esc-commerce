import { Router } from "express";
import CategoriaController from "../controllers/controller.categoria.js";



const routeCategoria = Router();

routeCategoria.get("/categorias", CategoriaController.getAllCategorias);
routeCategoria.post("/categorias", CategoriaController.createCategoria);
routeCategoria.put("/categorias/:id", CategoriaController.editCategoria);
routeCategoria.delete("/categorias/:id", CategoriaController.removeCategoria);


export default routeCategoria;
