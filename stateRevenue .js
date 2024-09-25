const stateRevenue = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Others: 19849.53
};

const totalRevenue = Object.values(stateRevenue).reduce((a, b) => a + b, 0);

for (let state in stateRevenue) {
    const percentage = (stateRevenue[state] / totalRevenue) * 100;
    console.log(`State: ${state}, Percentage: ${percentage.toFixed(2)}%`);
}
