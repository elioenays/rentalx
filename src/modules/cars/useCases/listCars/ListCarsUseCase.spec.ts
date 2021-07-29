import CarsRepositoryInMemory from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import ListCarsUseCase from "./ListCarsUseCase";

let listCarsUseCase: ListCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory);
  });

  it("should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car1",
      description: "description test",
      daily_rate: 100,
      license_plate: "02154",
      fine_amount: 71,
      brand: "Car Brand",
      category_id: "category id",
    });

    const cars = await listCarsUseCase.execute({});
    expect(car.available).toBe(true);
    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car2",
      description: "description test",
      daily_rate: 100,
      license_plate: "02154",
      fine_amount: 71,
      brand: "Car_brand",
      category_id: "category id",
    });

    const cars = await listCarsUseCase.execute({ brand: "Car_brand" });

    console.log(cars);

    expect(cars).toEqual([car]);
  });
});
