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
