# UFO Sightings--Filtering UFO Sighting Data with JavaScript 
## Overview
The purpose of this project was provide users with a webpage that contained a dynamic table filled with UFO sighting data which users could filter through for multiple criteria at the same time. Data stored in a JavaScript array was provided in the [data.js file](static/js/data.js) and used in functions in the [app.js file](static/js/app.js) that created and filled a dynamic table. This table was placed into an [HTML file](index.html) for easy viewing. The webpage created with the HTML filed was customized using Bootstrap components and presents a table with fully functional filters that allow users to interact with the visualization. 

## Results
### Overview of the webpage 
The Bootstrap grid system was employed to create and organize the webpage. When you visit the webpage, you will first see the navigation bar, the "jumbtron" header with a customized NASA photo background, the title of th article, a paragraph describing the the data. 

![Screen Shot 2022-08-25 at 5 38 13 PM](https://user-images.githubusercontent.com/104794100/186774583-ef162e83-4a67-4883-b8f9-8cfe63362f40.png)

Scrolling down will reveal the filters for the table and the table of sightings data. The table you will first see is the full, unfiltered table of data.

![Screen Shot 2022-08-25 at 5 45 49 PM](https://user-images.githubusercontent.com/104794100/186774843-dd34c272-6a07-4002-8d9f-f33f3c00621b.png)

### Navigating the filters 
The filter search boxes are to the left of the table. There are four input boxes where the user can input criteria which are "Enter Date", "Enter City", "Enter State", and "Enter Shape". Prompts are given in each input box to present the user with the correct format for entering search criteria. The date should be entered with no leading zeros for month or day. The city should be entered in all lowercase letters. The state should be entered as its abbreviation in lowercase letters. The shape should be entered in all lowercase letters. It is recommended for the user to scroll through the unfiltered data to get an idea of what shapes are possible inputs. 

![Screen Shot 2022-08-25 at 5 56 01 PM](https://user-images.githubusercontent.com/104794100/186776130-40f3fb8b-54e1-4f75-a2ab-f1ed6b71b61f.png)

### Using the filters
Not all input boxes must be filled in for the filtered search. However, the input must match exactly for the filter to work. To use a filter, all the user needs to do is type in the criteria they want to filter the table for and hit "Enter" on their keyboard. Clicking anywhere on the screen outside of the input box will also generate the filtered table. To reset the table, all the user needs to do is delete any text in the input boxes and hit "Enter" or click anywhere on the screen outside of the filter boxes.
#### Example One
To conduct a search for all sightings in "El Cajon", simply enter "el cajon" in the "Enter City" input box.

![Screen Shot 2022-08-25 at 6 04 27 PM](https://user-images.githubusercontent.com/104794100/186777044-76fa9907-f1d1-4d5c-ab8e-7a144a64f297.png)

#### Example Two
To conduc a search for all sightings of with triangle formations in California, simply enter "triangle" in the "Enter Formation" input box and "ca" in the "Enter State" input box.

![Screen Shot 2022-08-25 at 6 06 24 PM](https://user-images.githubusercontent.com/104794100/186777304-d75741f6-9fa6-4268-a890-e056a6cdb170.png)

## Summary: Drawback
This webpage provides user with a working dynamic table and filtering options, but there is one main drawback which is that the input must be entered exactly. If a user enters uppercase letters, the search will not register. 
### Solutions
To bypass this problem I suggest two solutions. 
1. Edit the input tags via the CSS file to include the attribute text-transform:lowercase to ensure that all text entered in input fields will be transformed into lowercase letters. This can be done by adding the following code to the [CSS file](static/css/style.css) connected to the [HTML file](index.html).
```
input[type="text"]{
    text-transform: lowercase;
}
```
This is block the user from being allowed to input any uppercase letters. 

2. Edit the input tags for each list item in the [HTML file](index.html). Adding the attribute style= "text-transform: lowercase" to each input tag will block the user from being allowed to input capital letters. The code with this attribute added will look like the following:
```
...
<li class="list-group-item bg-dark">
    <label for="state">Enter State</label>
    <input type="text" placeholder="ar" id="state" style= "text-transform: lowercase"/>
</li>
...
```
However, this solution requires that this attribute be added in four times compared to using the style sheet and only adding it once. Either way, both solutions result in the same end.
                           

