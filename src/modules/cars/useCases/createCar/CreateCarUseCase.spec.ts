import CarsRepositoryInMemory from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create Car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it("Should be able to create a new car", async () => {
    await createCarUseCase.execute({
      name: "Car Name Test",
      description: "Car Description Test",
      daily_rate: 100,
      license_plate: "vfg254",
      fine_amount: 71,
      brand: "Fiat",
      category_id: "123321",
    });
  });
});
