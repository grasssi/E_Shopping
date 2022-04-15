export class Ingredient {

    // ## first method
    // public name: string;
    // public amount: number
    // constructor(name: string, amount: number) {
    //     this.amount = amount;
    //     this.name = name;
    // }

        // ## second method
    constructor(public name: string, public amount: number) {
        this.amount = amount;
        this.name = name;
    }
}
