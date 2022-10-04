export class Product {
    name: string;
    description: string;
    stock:number;

    /**
     *
     */
    constructor(name: string, description: string, stock: number) {
        this.name = name;
        this.description = description;
        this.stock = stock;
    }
}
