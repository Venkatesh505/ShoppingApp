import { Ingredient } from 'src/app/shared/ingredient.model';

export class Recipe {
    public Name: string;
    public Description: string;
    public Imagepath: string;
    public Ingrediants: Ingredient[];
    constructor(Name: string,Description: string ,ImagePath: string,Ingrediants: Ingredient[]) {
        this.Name=Name;
        this.Description=Description;
        this.Imagepath=ImagePath;
        this.Ingrediants=Ingrediants;
    }
}