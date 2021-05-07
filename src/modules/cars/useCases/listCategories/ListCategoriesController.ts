import { Request, Response } from "express";
import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { ListCategoiresUseCase } from "./ListCategoiresUseCase";
const categoriesRepository = new CategoriesRepository();

class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoiresUseCase) {}
  handle(request: Request, response: Response): Response {
    const all = this.listCategoriesUseCase.execute();
    return response.json(all);
  }
}
export { ListCategoriesController };
