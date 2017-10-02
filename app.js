//Make an object
'use strict';

//Array of products
Product.allProducts = [];
var productSets = [];

function Product(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.clicks = 0;
  this.views = 0;
  Product.allProducts.push(this);
}

//Make new Products instances
new Product('Bag', 'img/bag.jpg');
new Product('Banana Slicer', 'img/banana.jpg');
new Product('Bathroom', 'img/bathroom.jpg');
new Product('Boots', 'img/boots.jpg');
new Product('Breakfast', 'img/breakfast.jpg');
new Product('Bubblegum', 'img/bubblegum.jpg');
new Product('Chair', 'img/chair.jpg');
new Product('Cthulhu', 'img/cthulhu.jpg');
new Product('Dog Duck', 'img/dog-duck.jpg');
new Product('Dragon Meat', 'img/dragon.jpg');
new Product('Pen', 'img/pen.jpg');
new Product('Pet Broom', 'img/pet-sweep.jpg');
new Product('Scissors', 'img/scissors.jpg');
new Product('Shark', 'img/shark.jpg');
new Product('Sweep', 'img/sweep.png');
new Product('Tauntaun', 'img/tauntaun.jpg');
new Product('Unicorn Meat', 'img/unicorn.jpg');
new Product('Tentacle USB', 'img/usb.gif');
new Product('Watering Can', 'img/water-can.jpg');
new Product('Wine Glass', 'img/wine-glass.jpg');

//Event Listener

var productOne = document.getElementById('productOne');
var productTwo = document.getElementById('productTwo');

productOne.addEventListener('click', randomProduct);
productTwo.addEventListener('click', randomProduct);
productThree.addEventListener('click', randomProduct);

//Randomly display products

// function randomSet () {
//   while(productSets.length < 3){
//     var randomNumber = Math.ceil(Math.random() * Product.allProducts.length);
//     if(productSets.indexOf(randomNumber) > -1) continue;
//     productSets[productSets.length] = randomNumber;
//   }
// }

function randomProduct() {
  while(productSets.length < 3){
    var randomNumber = Math.ceil(Math.random() * 19);
    if(productSets.indexOf(randomNumber) > -1) continue;
    productSets[productSets.length] = randomNumber;
  }
  productOne.src = Product.allProducts[productSets[0]].filepath;
  productTwo.src = Product.allProducts[productSets[1]].filepath;
  productThree.src = Product.allProducts[productSets[2]].filepath;
  // productSets.push(randomIndex);
}

randomProduct();
console.log(productSets);
