function formatString(input: string, toUpper?: boolean): string {
    if (toUpper || toUpper === undefined) {
        return input.toUpperCase();
    } else {
        return input.toLocaleLowerCase();
    }
}






function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    const itemWithRatingMorethanFour = items.filter((item: { title: string; rating: number }) => item.rating >= 4);
    return itemWithRatingMorethanFour;
}






function concatenateArrays<T>(...arrays: T[][]): T[] {
    let result: T[] = [];
    arrays.forEach((array) => result.push(...array));
    return result;
}







class Vehicle {
    constructor(private make: string, public year: number) {

    }
    getInfo() {
        console.log(`Make: ${this.make}, Year: ${this.year}`);
    }
}
class Car extends Vehicle {
    constructor(make: string, year: number, private model: string) {
        super(make, year);
    }
    getModel() {
        console.log(`Model: ${this.model}`);

    }
}






function processValue(value: string | number): number {
    if (typeof value === 'string') {
        return value.length;
    } else {
        return value * 2;
    }
}






interface Product {
    name: string;
    price: number;
}
function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products) {
        let ExpensiveProductIndex = 0;
        products.forEach((product, i) => {
            if (ExpensiveProductIndex < product.price) {
                ExpensiveProductIndex = i;
            }
        })
        return products[ExpensiveProductIndex];
    } else {
        return null;
    }
}





enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}
function getDayType(day: Day): string {
    if (day === Day.Friday || day === Day.Saturday) {
        return 'Weekend';
    } else {
        return 'Weekday';
    }
}




async function squareAsync(n: number): Promise<number> {

    return new Promise((resolve, reject) => {
        if (n < 0) {
            reject('Error: Negative number not allowed');
        } else {
            setTimeout(() => {
                resolve(n * n);
            }, 1000)
        }
    })
}