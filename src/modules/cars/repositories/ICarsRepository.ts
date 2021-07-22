import ICreateCarDTO from "@modules/cars/dtos/ICreateCarDTO";

export default interface ICarsRepository {
  create(data: ICreateCarDTO): Promise<void>;
}
