# HTML Review 
This is my review of HTML.
- HyperText Markup Language: coding language meant to be read by humans.
- This language is used to describe the content and structure of our documents.

## HTML Tags
```<p>Content</p>```
- opening tags have <> around them and closinng tags have </>

```<img src=”picture.jpg” />```
- tags can have attributes
- void element: self-closing element (no open and close bracket, just one bracket)
- src: source attribute, no source = dumb clipart mountain portait picture
- can be local file or a reference to an image on the internet

```<a href=”http://www.google.ca”>Google Please</a>```
- anchor tag
- hyperlink in HTML
- Google Please!: the hyperlink, will appear blue and underlined without CSS

## Hierarchy in HTML
```HTML
<section>
	<p>
		Something about news:
		<a href=”http://www.cnn.com”>CNN</a>
	</p>
</section>
```
- HTML can be nested inside one another
- hierarchies are shown as parent and child relationships
    - the anchor ```<a>``` is the grandchild of the section ```<section>```

## Boilerplate
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- put file path of the CSS as the href -->
    <link rel="stylesheet" href="style.css">
    <title>HTML Boilerplate</title>
</head>
<body>
    <h1>HTML Boilerplate</h1>
    <!-- put file path of the javascript as the src -->
    <script src="./app.js"></script>
</body>
</html> 
```
- tells page that it is going to be coded in HTML
- ```<head>``` consists of the hidden stuff
- ```<title>``` shows up on tabs and browser but not the actual page
- this page would just say "HTML Boilerplate" on it.

## Forms
- Forms can be created through HTML to collect data
    - Data can be manipulated through Javascript after collection through HTML

```HTML
<form action="results.html" method="GET" enctype="multipart/form-data">
...
</form>
```
- setting up the form
- put inputs between the ```<form>``` tags

```HTML
<div>
    <h2>Get Registered</h2>
    <label for="name">Name: </label>
    <input type="text" name="name" id="name">
</div>
```
- example of a text based input
- ```for``` attribute of ```<label>``` and ```id``` attribute of ```<input>``` help link the label with the input.
- ```type``` attribute of input helps identify what kind of input is going to be taken

```HTML
<div>
    <label for="email">Email: </label>
    <input type="email" name="email" id="email" required>
</div>
```
- another example of a text based input
- this one requires input of email
- by placing ```required``` at the end of the ```<input>```, it makes this section required to be filled out before submission of the form

```HTML
<div>
    <label for="age">Age: </label>
    <input type="number" name="age" id="age" min="1" max="120" required>
</div>
```
- example of a number input
- can set bounds of acceptable numbers by using ```min``` and ```max``` attributes

```HTML
<div>
    <h2>Fav Foods</h2>
    <label for="bananas">Bananas</label>
    <input type="checkbox" name="bananas" id="bananas">

    <label for="apples">Apples</label>
    <input type="checkbox" name="apples" id="apples">
</div>
```
- example of a checkbox input method
- can add as many checkboxes as you want with different labels by using ```checkbox``` as the parameter for the ```type``` attribute

```HTML
<div>
    <label for="file">File</label>
    <input type="file" name="file" id="file">
</div>
```
- an example of a file input

```HTML
<div>
    <button type="submit">SUBMIT INFO</button>
</div>
```
- this button allows for the submission of the different info filled out in the form

## Common Element Types
#### Text Wrappers
- ```<p>```
- ```<h1>``` to ```<h6>```
- ```<blockquote>```
- ```<li>```

#### Semantic Inline Text-Wrappers
- ```<a>```
- ```<span>```
- ```<em>```
- ```<strong>```

#### Semantic Block Containers
- ```<header>```
- ```<footer>```
- ```<main>```
- ```<section>```
- ```<article>```
- ```<nav>```
- ```<aside>```
- ```<div>```

#### List Containers
- ```<ul>```
- ```<ol>```
- ```<dl>```
