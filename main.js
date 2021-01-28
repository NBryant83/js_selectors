console.log('successfully linked!')

// For each prompt, perform the specified selection. Save the result to a variable, then console.log that variable. Confirm that it contains what it should in the console!

// 1) All img tags
const imgs = document.querySelectorAll('img')
console.log(imgs);

// 2) All section tags
const sections = document.querySelectorAll('section')
console.log(sections);

// 3) The element with an id of section-1
const sectionOne = document.getElementById('section-1')
console.log(sectionOne);

// 4) The element with an id of destinations-button
const button = document.getElementById('destinations-button')
console.log(button);

// 5) The first element with a class of images-rack
const rackImages = document.querySelector('.images-rack')
console.log(rackImages);

// 6) The first h1 tag
const tag = document.querySelector('h1')
console.log(tag);

// 7) All elements with a class of image-card
const cardImage = document.getElementsByClassName('image-card')
console.log(cardImage);

// 8) All elements with a class of over-image-text
const overImageText = document.getElementsByClassName('over-image-text')
console.log(overImageText);