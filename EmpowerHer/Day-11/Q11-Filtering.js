function processProducts(products) {
    const productInfo = products.map(product => {
        return {
            name: product.name,
            price: product.price
        };
    });
    console.log("Output (Logged):");
    
    productInfo.forEach(item => {
        const message = item.price > 50 
            ? `${item.name} is above $50` 
            : `${item.name} is below $50`; 
                                           
        console.log(message);
    });
}


const inputProducts = [
    { name: "Laptop", price: 1000 }, 
    { name: "Mouse", price: 20 }
];

processProducts(inputProducts);


const inputProducts2 = [
    { name: "Monitor", price: 150 }, 
    { name: "Keyboard", price: 49.99 },
    { name: "Webcam", price: 50 } 
];
processProducts(inputProducts2);
