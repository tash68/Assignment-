require('dotenv').config();
const cloudinary = require('cloudinary').v2;

console.log(cloudinary.url("tash-cafe-gallery\\assets\\cat.jpg"));
console.log(cloudinary.url("meal", {resource_type: "video"}));

console.log(cloudinary.image("tash-cafe-gallery\\assets\\cat.jpg"));

console.log(cloudinary.video("meal"));