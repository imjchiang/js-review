# CSS Review 
This is my review of CSS.
- Cascading Style Sheets: add style to the HTML page by accessing different elements, classes, and ids

## Basic Setup
- relation tag: what is the relationship to my HTML?
    - ```"stylesheet"```
- href tag: how do I find my css sheet?
    - ```"css/style.css"```: the location of the css file

## Hierarchy
- importance, specificity, source order

```CSS
body
{
    background-color: orange;
}

div
{
    background-color: coral;
}
```
- background color for the ```<div>``` will be coral

## Some Styling Examples
- can change colors, size, order, the way things appear on CSS

```CSS
body
{
    border: solid black 5px;
}
```
- creates a border around the ```<body>``` HTML element that is solid black and 5 pixels in width

```CSS
body
{
    border-style: dashed;
    border-color: white;
    border-width: 10px;
}
```
- creates a border around the ```<body>``` HTML element that is dashed white and 10 pixels in width

```CSS
.comments
{
    background-color: white;
    color: rgb(241, 171, 171);
}
```
- takes all HTML elements with the class ```.comments``` and sets the background color to white and the color of the content to the ```rgb(241, 171, 171)``` color

```CSS
div
{
    color: purple;
    background-color: coral;
}

#special
{
    font-family: 'Courier New', Courier, monospace;
    background-color: darkgreen;
}
```
- takes all ```<div>``` elements and sets the content color to purple and the background color to coral
- takes all elements with the id ```#special``` and sets the font of the content to ```"Courier New"``` with ```"Courier"``` and ```"monospace"``` as fallback fonts
- the background color of the elements with the id ```#special``` is set to dark green
    - overrides the background color of coral if a ```<div>``` has an id of ```#special```