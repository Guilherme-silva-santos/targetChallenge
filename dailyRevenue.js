const dailyRevenue = [
    { day: 1, value: 1000.0 },
    { day: 2, value: 500.0 },
    { day: 3, value: 0.0 },
    { day: 4, value: 700.0 },
    { day: 5, value: 1500.0 },
    { day: 6, value: 0.0 },
    { day: 7, value: 2000.0 }
];

const validRevenue = dailyRevenue.filter(d => d.value > 0).map(d => d.value);
const minRevenue = Math.min(...validRevenue);
const maxRevenue = Math.max(...validRevenue);
const avgRevenue = validRevenue.reduce((a, b) => a + b, 0) / validRevenue.length;
const daysAboveAverage = validRevenue.filter(value => value > avgRevenue).length;

console.log(`Min revenue: $${minRevenue.toFixed(2)}`);
console.log(`Max revenue: $${maxRevenue.toFixed(2)}`);
console.log(`Days above average: ${daysAboveAverage}`);
