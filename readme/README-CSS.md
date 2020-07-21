# CSS Review 
This is my review of CSS.
- Cascading Style Sheets: add style to the page

## Basic Setup
- relation tag: what is the relationship to my HTML?
    - "stylesheet"
- href tag: how do I find my css sheet?
    - "css/style.css": the location of the css file

## Hierarchy
- importance, specificity, source order

```HTML
body
{
    background-color: orange;
}

div
{
    background-color: coral;
}
```
- background color for the ```div``` will be coral

## Styling
- 

body
{
    background-color: orange;
    color: rgb(241, 171, 171);
    border: solid black 5px;
    border-style: dashed;
    border-color: white;
    border-width: 10px;
    height: 200px;
}

div
{
    color: purple;
    background-color: coral;
}

.comments
{
    background-color: white;
}

#special
{
    font-family: 'Courier New', Courier, monospace;
    background-color: darkgreen;
}