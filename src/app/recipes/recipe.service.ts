import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Test',
      'test desc',
      'https://www.budgetbytes.com/wp-content/uploads/2023/06/Creamy-chicken-gnocchi-v2-768x1024.jpg',
      [new Ingredient('Ing', 1), new Ingredient('Ing', 4)]
    ),
    new Recipe(
      'Another recipe',
      'Some random text',
      'https://www.shutterstock.com/image-photo/open-recipe-book-food-related-260nw-2014258427.jpg',
      [new Ingredient('Moz', 1), new Ingredient('Som', 7)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
