import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { drive_license, email, name, password } = request.body;

    const user = { drive_license, email, name, password };
    const createUserUseCase = container.resolve(CreateUserUseCase);

    await createUserUseCase.execute(user);

    return response.status(201).json({ user }).send();
  }
}
