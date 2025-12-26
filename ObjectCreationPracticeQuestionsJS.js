//Create a const object call "Product"

const _product= {
    "_productName": "Parker Jotter Standard CT Ball Pen",
    "_productPrice": 270,
    "_productColor": "Black",
    "_productCategory": "Stationery",
    "_numberOfReviews": 7002

}

console.log("Product Name: " + _product._productName);
console.log("Product Price: " + _product["_productPrice"]);
console.log("Product Details:"+ JSON.stringify(_product));

console.log("type of Key in Object:"+ typeof _product["_productName"]);
console.log("type of _product:" + typeof _product);

//Create a const object call "Profile"
const _profile ={
    "_firstName": "Sampat",
    "_lastName": "Kumar",
    _isVerified: true,
    "_numberOfPosts": 350,
    "_numberOfFollowers": 1500,
}
console.log("First Name: " + _profile._firstName);
console.log("Last Name: " + _profile["_lastName"]);
console.log("Profile Details:"+ JSON.stringify(_profile));

console.log("type of Key in Object:"+ typeof _profile["_firstName"]);
console.log("type of _isVerified:"+ typeof _profile["_isVerified"]);
console.log("type of _profile:"+ typeof _profile);