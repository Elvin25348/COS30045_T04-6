
// ==========================================
// T04-5: Bind CSV data to SVG rectangles
// ==========================================

const createBarChart = (data) => {

    // 1. Create an SVG inside the responsive container.
    const svg = d3.select(".responsive-svg-container")
        .append("svg")
        .attr("viewBox", "0 0 1200 400")
        .style("border", "1px solid black");

    // 2. Bind the CSV data to rectangles.
    svg
        .selectAll("rect")
        .data(data)
        .join("rect")

        // 3. Assign a class based on each count.
        .attr("class", d => `bar bar-${d.count}`)

        // 4. Set the bar width using the count.
        .attr("width", d => d.count)

        // 5. Give every bar the same height.
        .attr("height", 16);

    // Note: x and y positions are intentionally not set.
    // The bars overlap at this stage.
    // Scaling and spacing will be developed in T04-6.

};
