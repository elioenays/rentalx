import { Request, Response } from "express";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationController {
  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {}
  handle(request: Request, response: Response) {
    const { name, description } = request.body;

    const specification = { name, description };

    this.createSpecificationUseCase.execute(specification);

    return response.status(201).json(specification);
  }
}
export { CreateSpecificationController };
