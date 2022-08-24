// import the data from data.js
const tableData= data;
// Reference the HTML table using D3
var tbody = d3.select(“tbody”);
// Build table
function buildTable(data) {
    // Clear rows 
    tboday.html("");
    // Loop through each object in the data
    //and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // Append a row to the table body
        let row = tbody.append("tr");
        // Loop through each field in the dataRow
        // and add each value as a table cell 
        Object.values(dataRow).forEach((val)=> {
            // Append each field in a table row
            let cell = row.append("td");
            // Add value to each field in a table row
            cell.text(val);
        });
    });
}