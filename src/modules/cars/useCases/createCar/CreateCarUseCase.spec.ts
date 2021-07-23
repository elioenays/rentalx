import CarsRepositoryInMemory from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import AppError from "@shared/errors/AppError";
import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create Car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it("Should be able to create a new car", async () => {
    const car = await createCarUseCase.execute({
      name: "Car Name Test",
      description: "Car Description Test",
      daily_rate: 100,
      license_plate: "vfg254",
      fine_amount: 71,
      brand: "Fiat",
      category_id: "123321",
    });

    expect(car).toHaveProperty("id");
  });

  it("should not be able to create a car with exists license plate", () => {
    expect(async () => {
      await createCarUseCase.execute({
        name: "Car1",
        description: "Car Description Test",
        daily_rate: 100,
        license_plate: "vfg254",
        fine_amount: 71,
        brand: "Fiat",
        category_id: "123321",
      });
      await createCarUseCase.execute({
        name: "Car2",
        description: "Car Description Test",
        daily_rate: 100,
        license_plate: "vfg254",
        fine_amount: 71,
        brand: "Fiat",
        category_id: "123321",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
  it("should not be able to create a car with available true by default", async () => {
    const car = await createCarUseCase.execute({
      name: "Car Available",
      description: "Car Description Test",
      daily_rate: 100,
      license_plate: "abcd",
      fine_amount: 71,
      brand: "Fiat",
      category_id: "123321",
    });

    expect(car.available).toBe(true);
  });
});
