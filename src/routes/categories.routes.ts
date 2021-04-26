import { Router } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";
const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const category = {
    name,
    description,
  };

  categoriesRepository.create(category);
  return response.status(201).json({ category });
});

categoriesRoutes.get("/", (request, response) => {
  const all = categoriesRepository.list();
  return response.json(all);
});

export { categoriesRoutes };
