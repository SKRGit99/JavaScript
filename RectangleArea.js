var _length =20;
var _width =25;
var area = getArea();
function setLength(length) {
  _length = length;
}

function setWidth(width) {
  _width = width;
}

function getArea() {
  return _length * _width;
  
}

console.log("Area is: " + area);