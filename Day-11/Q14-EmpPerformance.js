function evaluatePerformance(employees) {
    function getPerformanceLevel(rating) {
        if (rating > 4.5) {
            return "Excellent";
        } else if (rating >= 3 && rating <= 4.5) {
            return "Good";
        } else {
            return "Needs Improvement";
        }
    }

    const performanceOrder = {
        "Excellent": 1,
        "Good": 2,
        "Needs Improvement": 3
    };
    const filteredEmployees = employees.filter(employee => employee.tasksCompleted > 5);
    const performanceData = filteredEmployees.map(employee => {
        const performanceLevel = getPerformanceLevel(employee.rating);
        return {
            name: employee.name,
            performance: performanceLevel
        };
    });
    const sortedEmployees = performanceData.sort((a, b) => {
        return performanceOrder[a.performance] - performanceOrder[b.performance];
    });
    return sortedEmployees;
}

const inputEmployees = [
    { name: "Alice", tasksCompleted: 8, rating: 4.7 },
    { name: "Bob", tasksCompleted: 4, rating: 4.0 },
    { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
    { name: "David", tasksCompleted: 10, rating: 4.9 },
    { name: "Eve", tasksCompleted: 7, rating: 2.8 }
];

const output = evaluatePerformance(inputEmployees);

console.log( output);