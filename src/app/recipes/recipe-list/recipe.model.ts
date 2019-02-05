export class Recipe {
    public Name: string;
    public Description: string;
    public Imagepath: string;
    constructor(Name: string,Description: string ,ImagePath: string) {
        this.Name=Name;
        this.Description=Description;
        this.Imagepath=ImagePath;
    }
}