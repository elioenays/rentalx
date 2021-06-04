import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationController {
  handle(request: Request, response: Response) {
    const { name, description } = request.body;

    const createSpecificationUseCase = container.resolve(
      CreateSpecificationUseCase
    );

    const specification = { name, description };

    createSpecificationUseCase.execute(specification);

    return response.status(201).json(specification);
  }
}
export { CreateSpecificationController };
