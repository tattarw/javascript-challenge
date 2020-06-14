// from data.js
var tableData = data;
var tbody = d3.select("tbody");

tableData.forEach(function(ufo) {
    console.log(ufo);
    var row = tbody.append("tr");

    Object.entries(ufo).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    });
  });


// Creating Filter button 
var filter = d3.select("#filter-btn");
filter.on("click", function() {

  tbody.html("");

    var input_date = d3.select("#datetime");
    var input_value = input_date.property("value");
    console.log(input_value);

    // Filtering the Data based on the date
    var filtered_data = tableData.filter(ufo_date => ufo_date.datetime == input_value);
    console.log(filtered_data);

    filtered_data.forEach(function(filter1) {
    console.log(filter1);
    var row = tbody.append("tr");

    Object.entries(filter1).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});
});