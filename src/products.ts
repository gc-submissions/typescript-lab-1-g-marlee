export interface Product {
    name: string;
    price: number;
}

const products: Product[] = [{
    name: "paint",
    price: 45,  
    }, {
    name: "brush",
    price: 8,
    }, {
    name: "bucket",
    price: 2,
}];

export function calcAverageProductPrice(products: Product[]): number {
    let total = 0;
    if (products.length > 0) {
        products.forEach(product => {
            total += product.price;
        });
        return total/ products.length;
    }

    return total;    
};

const average = calcAverageProductPrice(products);

console.log(average);

