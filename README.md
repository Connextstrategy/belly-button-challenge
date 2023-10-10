# Python Rutgers Bootcamp Challenge - Belly Button Biodiversity

This activity is broken down into multiple deliverables to include a javascript application, an already created index file, and a dashboard viable via a web browser. 

## Description

In this assignment, you will build an interactive dashboard to explore the Belly Button Biodiversity datasetLinks to an external site., which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Instructions

1. Use the D3 library to read in samples.json from the URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json

2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

* Use sample_values as the values for the bar chart
* Use otu_ids as the labels for the bar chart
* Use otu_labels as the hovertext for the chart.

  ![Screenshot 2023-10-10 135515](https://github.com/Connextstrategy/belly-button-challenge/assets/18508699/c6518639-4f51-479c-846b-9ab7704f41a8)


3. Create a bubble chart that displays each sample.
   
* Use otu_ids for the x values.
* Use sample_values for the y values.
* Use sample_values for the marker size.
* Use otu_ids for the marker colors.
* Use otu_labels for the text values.
* 
![Screenshot 2023-10-10 140811](https://github.com/Connextstrategy/belly-button-challenge/assets/18508699/f8b325f3-4fb1-47cb-8f21-e9650d6dd7b1)

4. Display the sample metadata, i.e., an individual's demographic information.

5. Display each key-value pair from the metadata JSON object somewhere on the page.
   
![Screenshot 2023-10-10 135610](https://github.com/Connextstrategy/belly-button-challenge/assets/18508699/b6de6c71-2910-4057-80d0-f9ad2e8b160f)

6. Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard is shown as follows:

![Screenshot 2023-10-10 140846](https://github.com/Connextstrategy/belly-button-challenge/assets/18508699/cc160f3d-913c-4f2c-a5d0-644235e0f9a9)


### Dependencies

* Using Visual Studio Code for coding and data visualizations

### Installing

* No modifications needed to be made to files/folders

## Help

* Use console.log inside of your JavaScript code to see what your data looks like at each step.

* Refer to the Plotly.js documentationLinks to an external site. when building the plots.

## Authors

Christopher Manfredi

## Version History

    * Initial Release

## Acknowledgments

* This is specifically for an exercise for Rutgers Boot Camp 
