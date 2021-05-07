import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
  constructor(private createCategory: CreateCategoryUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    const category = { name, description };

    this.createCategory.execute(category);

    return response.status(201).json({ category });
  }
}

export { CreateCategoryController };
