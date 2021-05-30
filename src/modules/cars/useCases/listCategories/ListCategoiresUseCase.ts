import { Category } from "../../entities/category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ListCategoiresUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute(): Category[] {
    const categories = this.categoriesRepository.list();
    return categories;
  }
}
export { ListCategoiresUseCase };
