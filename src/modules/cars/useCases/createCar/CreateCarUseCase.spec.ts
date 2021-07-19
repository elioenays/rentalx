import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
describe("Create Car", () => {
  beforeEach(() => {
    createCarUseCase = new CreateCarUseCase();
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
