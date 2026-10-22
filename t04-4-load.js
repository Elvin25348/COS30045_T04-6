
// ==========================================
// T04-4: Load CSV, convert types, and check data
// ==========================================

// Load the CSV and convert count from string to number.
d3.csv("data/tvBrandCount.csv", d => ({
    brand: d.brand,
    count: +d.count
})).then(data => {

    // Display the complete array of objects.
    console.log(data);

    // Check the number of rows.
    console.log("rows:", data.length);

    // Find the largest count.
    console.log("max:", d3.max(data, d => d.count));

    // Find the smallest count.
    console.log("min:", d3.min(data, d => d.count));

    // Find the minimum and maximum.
    console.log("extent:", d3.extent(data, d => d.count));

    // Sort from largest count to smallest count.
    data.sort((a, b) => d3.descending(a.count, b.count));

    // Call the real chart function from t04-5-bars.js.
    createBarChart(data);

}).catch(error => {

    // Display an error if the CSV cannot be loaded.
    console.error(
        "Failed to load the CSV. Check the file path, CSV headers, and Live Server.",
        error
    );

});
