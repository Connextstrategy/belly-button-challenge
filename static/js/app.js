// The url with data
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

// Initialize functions 
function init() {

    // Use D3 to select the dropdown menu
    let dropdownMenu = d3.select("#selDataset");

    // Fetch the JSON data and console log it
    d3.json(url).then((data) => {
        console.log(`Data: ${data}`);

        // create array based on the names
        let names = data.names;

        // Iterate and appeand through the names
        names.forEach((name) => {
            dropdownMenu.append("option").text(name).property("value", name);
        });

        // Make the first names start at zero and then go through next 
        let name = names[0];

        // Name each function to initiate analysis for each visualization
        demographics(name);
        bar(name);
        bubble(name);
        
    });
}

// Make the demographics panel
function demographics(selectedValue) {
    // Fetch the JSON data and console log it
    d3.json(url).then((data) => {
        console.log(`Data: ${data}`);

        // An array of metadata objects
        let metadata = data.metadata;
        
        // Filter data where id = selected value after converting their types 
        // (bc meta.id is in integer format and selectValue from is in string format)
        let filteredData = metadata.filter((meta) => meta.id == selectedValue);
      
        // Assign the first object to obj variable
        let obj = filteredData[0]
        
        // Clear the child elements in div with id sample-metadata
        d3.select("#sample-metadata").html("");
  
        // Object.entries() is a built-in method in JavaScript 
        // This returns an array of a given object's own enumerable property [key, value]
        let entries = Object.entries(obj);
        
        // Iterate through the entries array
        // Add a h5 child element for each key-value pair to the div with id sample-metadata
        entries.forEach(([key,value]) => {
            d3.select("#sample-metadata").append("h5").text(`${key}: ${value}`);
        });

        // Log the entries Array
        console.log(entries);
    });
  }
  

// Make the bar chart
function bar(selectedValue) {
    // Fetch the JSON data and console log it
    d3.json(url).then((data) => {
        console.log(`Data: ${data}`);

            // An array of sample objects
            let samples = data.samples;

            // Filter data where id will be the selected value for analysis 
            let filteredID = samples.filter((sample) => sample.id === selectedValue);

            // Assign the first object to obj variable
            let firstobject = filteredID[0];
        
        // Trace for the data for the horizontal bar chart
        let trace = [{
            // Slice the top 10 otus
            x: firstobject.sample_values.slice(0,10).reverse(),
            y: firstobject.otu_ids.slice(0,10).map((otu_id) => `OTU ${otu_id}`).reverse(),
            text: firstobject.otu_labels.slice(0,10).reverse(),
            type: "bar",
            marker: {
                color: "rgb(0,191,255)"
            },
            orientation: "h"
        }];
        
        // Use Plotly to plot bar chart
        Plotly.newPlot("bar", trace);
    });
}
  
// Make the bubble chart function
function bubble(selectedValue) {
    // Fetch the JSON data and console log it
    d3.json(url).then((data) => {

        // An array of sample objects
        let samples = data.samples;
    
        // Filter data where id = selected value 
        let filteredID = samples.filter((sample) => sample.id === selectedValue);
    
        // Assign the first object to obj variable
        let obj = filteredID[0];
        
        // Use trace for bubble chart
        let trace = [{
            x: obj.otu_ids,
            y: obj.sample_values,
            text: obj.otu_labels,
            mode: "markers",
            marker: {
                size: obj.sample_values,
                color: obj.otu_ids
            }
        }];
    
        // Apply layout to ntoe name of axis 
        let layout = {
            xaxis: {title: "OTU ID"}
        };
    
        // Use Plotly to plot the data in a bubble chart
        Plotly.newPlot("bubble", trace, layout);
    });
};

// Add an event listener to the dropdown to update the charts and details panel
function optionChanged(selectedValue) {
    if (selectedValue !== "Select Sample ID") {
        demographics(selectedValue);
        bar(selectedValue);
        bubble(selectedValue);
    };
};


init();
