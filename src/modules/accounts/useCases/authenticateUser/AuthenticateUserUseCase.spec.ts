import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import AuthenticateUserUseCase from "./AuthenticateUserUseCase";
import CreateUserUseCase from "../createUser/CreateUserUseCase";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import AppError from "../../../../errors/AppError";

let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe("Authenticate User", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    authenticateUserUseCase = new AuthenticateUserUseCase(
      usersRepositoryInMemory
    );
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });

  it("should be able to authenticate an user ", async () => {
    const user: ICreateUserDTO = {
      drive_license: "00123",
      email: "teste@teste.com",
      password: "123",
      name: "User Teste",
    };

    await createUserUseCase.execute(user);

    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(result).toHaveProperty("token");
  });

  it("should not be able to authenticate with an none existent user", () => {
    expect(async () => {
      await authenticateUserUseCase.execute({
        email: "false@false.com",
        password: "incorrect",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to authenticate with incorrect password", () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        drive_license: "01245",
        email: "teste@teste.com",
        password: "12345",
        name: "User Test",
      };
      await createUserUseCase.execute(user);

      await authenticateUserUseCase.execute({
        email: user.email,
        password: "01425",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
