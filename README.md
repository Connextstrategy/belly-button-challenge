# Python Rutgers Bootcamp Challenge - Belly Button Biodiversity

This activity is broken down into multiple deliverables to include creation of a dataframe for Category, Subcategory, Campaign, Contacts, and the creation of a database called Crowdfunding. 

## Description

For the ETL mini project, you will work with a partner to practice building an ETL pipeline using Python, Pandas, and either Python dictionary methods or regular expressions to extract and transform the data. After you transform the data, you'll create four CSV files and use the CSV file data to create an ERD and a table schema. Finally, you’ll upload the CSV file data into a Postgres database.

## Create the Category and Subcategory DataFrames

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

* Using Jupyter Notebooks or Visual Studio Code for coding and data visualizations
* import pandas as pd
* import numpy as np
* import re
* from datetime import datetime as dt
* import json

### Installing

* No modifications needed to be made to files/folders

## Help

* To split each "category & sub-category" column value into "category" and "subcategory" column values, use df[["new_column1","new_column2"]] = df["column"].str.split(). Make sure to pass the correct parameters to the split() function.

* To get the unique category and subcategory values from the "category" and "subcategory" columns, create a NumPy array where the array length equals the number of unique categories and unique subcategories from each column. For information about how to do so, see numpy.arangeLinks to an external site. in the NumPy documentation.

* To create the category and subcategory identification numbers, use a list comprehension to add the "cat" string or the "subcat" string to each number in the category or the subcategory array, respectively.

* For more information about creating a new Pandas DataFrame, see the pandas.DataFrameLinks to an external site. in the Pandas documentation.

* To convert the "goal" and "pledged" columns to the float data type, use the astype() method.

* To convert the "launch_date" and "end_date" UTC times to the datetime format, see the Transform_Grocery_Orders_Solved.ipynb activity solution.

* For more information about how to add the "category_id" and "subcategory_id" unique identification numbers to the campaign DataFrame, see the pandas.DataFrame.mergeLinks to an external site. in the Pandas documentation.

## Authors

Christopher Manfredi, Brandon Mata, June Higgins

## Version History

    * Initial Release

## Acknowledgments

* This is specifically for an exercise for Rutgers Boot Camp 
