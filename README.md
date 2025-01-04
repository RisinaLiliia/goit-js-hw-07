# goit-js-hw-07

Use this layout to style your task markup 

https://www.figma.com/design/m8k9NQV7qZrtYDCvxfD68B/HW-JavaScript?node-id=0-1&p=f&t=aW6eJhjD97xUevGz-0

Task 1

The HTML contains a list of categories ul#categories.

<ul id="categories">
<li class="item">
<h2>Animals</h2>
<ul>
<li>Cat</li>
<li>Hamster</li>
<li>Horse</li>
<li>Parrot</li>
</ul>
</li>
<li class="item">
<h2>Products</h2>
<ul>
<li>Bread</li>
<li>Parsley</li>
<li>Cheese</li>
</ul>
</li>
<li class="item">
<h2>Technologies</h2>
<ul>
<li>HTML</li>
<li>CSS</li>
<li>JavaScript</li>
<li>React</li>
<li>Node.js</li>
</ul>
</li>

</ul>

Using the properties and methods of DOM elements, write a script that:

Counts and prints to the console the number of categories in ul#categories, i.e. li.item elements.
For each li.item element in the ul#categories list, it will find and output to the console the text of the element's title (the <h2> tag) and the number of elements in the category (all <li> nested within it).

What the mentor will pay attention to when checking:

The number of categories, their names, and the number of elements were obtained using the properties and methods of DOM elements
The data for each category was obtained and output to the console in the body of the loop or the forEach() method
The following message should be output to the console:

Task 2

Write a script to create an image gallery based on an array of data. The HTML contains a list ul.gallery.

<ul class="gallery"></ul>

Use an array of images objects to create <img> elements nested within <li>.

You can create and add HTML elements using document.createElement() and elem.append() or template strings and elem.insertAdjacentHTML().

All gallery elements should be added to the DOM in a single add operation.

Add minimal flexbox styling to the gallery via CSS classes.

const images = [
 {
 url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
 alt: "White and Black Long Fur Cat",
 },
 {
 url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
 alt: "Orange and White Koi Fish Near Yellow Koi Fish",
 },
 {
 url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
 alt: "Group of Horses Running",
 },
 {
 url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
 alt: "Alpine Spring Meadows",
 },
 {
 url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
 alt: "Nature Landscape",
 },
 {
 url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
 alt: "Lighthouse Coast Sea",
 },
];

What the mentor will pay attention to during the check:

A gallery of three images has been created and added to the DOM
The gallery has been added to the ul.gallery list and consists of 6 <li> elements, in which <img> elements are nested
Data from the images object array was used to create the <img> elements
All gallery elements have been added to the DOM in one add operation
There is minimal flexbox design of the gallery via CSS classes

Task 3

Write a script that, when typing text in the input#name-input input (input event), substitutes its current value in span#name-output as a name for greeting. Be sure to clean the value in the input from spaces at the edges. If the input is empty or contains only spaces, then the string "Anonymous" should be substituted instead of the name in the span.

<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>

What the mentor will pay attention to when checking:

The input event is listened to on the input#name-input element
While typing text in the input, its current value is substituted into span#name-output as a name for greeting
The value in the input is cleaned of spaces at the edges
If the input is empty or contains only spaces, then the string "Anonymous" should be substituted instead of the name in the span

Task 4

Write a script to manage the login form.

<form class="login-form">
<label>
Email
<input type="email" name="email" />
</label>
<label>
Password
<input type="password" name="password" />
</label>
<button type="submit">Log in</button>
</form>

the form.login-form should be submitted on the submit event.
When submitting the form, the page should not be reloaded.
If there are empty fields in the form, display an alert with a warning that 'All form fields must be filled in'. Do not add the required attribute to the inputs, validation should be done through JS.
If the user has filled in all the fields and submitted the form, collect the field values ​​into an object with two properties, where the key is the name of the inputs, and the value is the corresponding values ​​of these inputs, stripped of spaces at the edges. To access the form elements, use the elements property.
When submitting the form, output an object with the entered data to the console and clear the values ​​of the form fields using the reset method.

What the mentor will pay attention to when checking:

The submit event is listened to
The page is not reloaded when submitting the form
If there are empty fields in the form when submitting, an alert is displayed
When submitting, an object with two properties is displayed in the console, where the keys are the names of the inputs, and the values ​​are the corresponding values ​​of these inputs, cleared of spaces at the edges
After submitting, the form elements are cleared

Task 5

Write a script that changes the background color of the <body> element via an inline style when clicking on button.change-color and sets this color value as text content for span.color.

<div class="widget">
<p>Background color: <span class="color">-</span></p>
<button type="button" class="change-color">Change color</button>
</div>

To generate a random color, use the getRandomHexColor() function.

function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215)
.toString(16)
.padStart(6, 0)}`;
}

Note that the getRandomHexColor() function returns the color in hex format, while the background color on the <body> will be in rgb format. This is normal and does not require any editing.

What the mentor will pay attention to when checking:

The background on <body> is set only after clicking on button.change-color
With each click on the button.change-color element, the background on <body> is painted with a new random color
On <body> and span.color the value of the same color

Task 6 (optional)

Write a script to create and clear a collection of elements with the following functionality.

There is an input into which the user enters the desired number of elements. After clicking the Create button, a collection with the corresponding number of elements should be rendered (added to the DOM) and the value in the input should be cleared. When clicking the Create button again, a new collection should be rendered over the old collection. After clicking the Destroy button, the collection of elements should be cleared.

<div id="controls">
<input type="number" min="1" max="100" step="1" />
<button type="button" data-create>Create</button>
<button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>

After the user clicks the Create button, the value in the input must be validated, it must be in the range from 1 to 100 inclusive. Only if it satisfies the condition, new <div> elements should be added to the DOM.

To render elements on the page, create a function createBoxes(amount), which takes one parameter — a number that stores the number of elements to render.

The function should create as many <div> elements as specified in the amount parameter. All these <div> should be added in one operation to the DOM as child elements for div#boxes.

The dimensions of the first <div> element should be 30px by 30px.
Each subsequent element should be 10px wider and taller than the previous one.
All elements should have a random background color. Use the ready-made function getRandomHexColor() to get a random color.

function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215)
.toString(16)
.padStart(6, 0)}`;
}

To clear the collection after clicking the Destroy button, create a function destroyBoxes() that clears the contents of div#boxes, thus deleting all created elements.

What the mentor will pay attention to when checking:

After clicking the Create button, if the input value is outside the range of 1-100, nothing happens
After clicking the Create button, the number of multi-colored squares specified in input is added to div#boxes in one operation. The input value is cleared
After clicking the Create button again, the previous squares are completely removed and new ones are added in their place in the number specified in input. The input value is cleared
All squares in div#boxes are multi-colored and have a random background color
The first square in div#boxes has dimensions of 30px by 30px, and each subsequent one is 10px higher and wider than the previous one
After clicking the Destroy button, all squares from div#boxes should be deleted
