## Questions and Answers:
### Some Important concepts about CSS and JavaScript

#### 1. What is ES6 and what are the new features introduced in ES6?
##### Answer: 
ES6 (ECMAScript 6) is a major update to the JavaScript programming language, officially released in 2015.It introduced features that made code cleaner, more efficient, and easier to read. Key improvements include:

-Block-scoped variables: let and const for better variable control.
-Concise functions: Arrow functions for shorter syntax.
-String improvements: Template literals for easier string formatting.
-Object enhancements: Classes, modules, and enhanced object literals.
-Asynchronous handling: Promises for managing asynchronous operations.
-Data structures: Maps and Sets for efficient data storage.
These features, among others, have transformed JavaScript development and are widely used in modern web applications.

#### 2. What is Event Bubble and Event Delegation in JS?
##### Answer: 
##### Event Bubbling: 
When an event occurs on an element, it first triggers the event handler on that element. Then, the event "bubbles up" through the DOM hierarchy, triggering event handlers on parent elements until it reaches the root. This is called event bubbling.

```html
<div id="parent">
  <button id="child">Click me</button>
</div>
```
```javascript
document.addEventListener('click', (event) => {
  if (event.target.id === 'parent') {
    console.log('Parent clicked');
  }
});
```
##### Event Delegation:
Instead of attaching event listeners to multiple child elements, attaching a single listener to a parent element. When an event occurs on a child, it bubbles up to the parent where the listener is attached. You can then determine the target element of the event and handle it accordingly. This is more efficient than attaching multiple listeners.

```html
<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```
```javascript
document.getElementById('list').addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    console.log(event.target.textContent);
  }
});
```

#### 3. What is the difference between localstorage , session storage and cookies?
##### Answer:
##### Local Storage
-Stores data persistently on the client-side.  
-Data survives browser closures and reopens.  
-Suitable for storing user preferences, application data, etc.  
-Access using localStorage object.  

##### Session Storage
-Stores data temporarily for a single browser session.  
-Data is cleared when the browser is closed.  
-Useful for storing temporary session data like shopping cart items.  
-Access using sessionStorage object.  

###### Cookies
-Small text files sent by the server to the client.  
-Can be used for session management, user preferences, and tracking.  
-Have size limitations and security concerns.  
-Can be accessed through the document.cookie property.  

#### 4. In CSS what is the difference between display inline , display inline block and display block?

##### Inline
-Elements are displayed in a single line.     
-Cannot set width or height.     
-Margins and padding only affect horizontal spacing.  

##### Inline-Block
-Elements are displayed in a single line like inline elements.  
-Can set width and height.     
-Margins and padding affect all sides.  
-Behaves like a block element within the line.     

##### Block
-Elements start on a new line.  
-Can set width and height.     
-Margins and padding affect all sides.  
-Occupy the entire width available.  

#### 5. What are new features in CSS3?

CSS3 brought a significant leap forward in web design, offering a lot of new properties and features.

Here are some of the most notable ones:   

###### Visual Enhancements
Rounded Corners: Create smooth edges using border-radius.  
Box Shadows: Add depth and dimension with box-shadow.  
Text Shadows: Enhance text readability and style with text-shadow. 
Gradients: Create stunning background effects without images using linear-gradient and radial-gradient.  
Opacity: Control element transparency with opacity.  
Transforms: Rotate, scale, skew, and translate elements with transform.  
Transitions: Create smooth animations between styles with transition.  
Animations: Define complex animations using animation.  

###### Layout Improvements
Flexbox: A powerful layout system for creating flexible and responsive designs.   
Grid Layout: A two-dimensional grid system for complex layouts.   
Multiple Columns: Create newspaper-like layouts with column-count, column-width, and column-gap.

###### Typography
Font Faces: Embed custom fonts directly into your website.  
Text-decoration: Enhance text styles with text-decoration.
Word-wrap: Control how long lines of text wrap.   
Other Notable Features
Media Queries: Create responsive designs based on screen size and other factors.   
Selectors: Improved selectors for more precise styling.   
Backgrounds: Multiple background images and colors.