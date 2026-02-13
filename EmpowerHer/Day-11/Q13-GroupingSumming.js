function countCategories(categories) {
    const categoryCounts = categories.reduce((acc, category) => {
        if (acc[category]) {
            acc[category] += 1;
        } else {
            acc[category] = 1;
        }
        return acc;
    }, {}); 
    return categoryCounts;
}
const inputCategories = [
    "electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"
];

const countsObject = countCategories(inputCategories);
console.log("Output (Object):", countsObject);