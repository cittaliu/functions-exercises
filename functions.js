// TODO: add your solutions here!

//*********PROBLEM 1-----SOLUTION:
//function declaration
function combineWords(word1, word2){
  return word1+word2;
}
//test code
var result = combineWords("milk", "bottle")
console.log(result);

//*********PROBLEM 2-----SOLUTION:
//function declaration
function repeatPhrase(phrase, n) {
    for(var i=0; i<n; i++){
      console.log(phrase);
    }
    return;
}
//test code
var result = repeatPhrase("Hello", 5);

//*********PROBLEM 3-----SOLUTION:
//function declaration
function toTheNthPower(number, power) {
    return Math.pow(number, power);
}
//test code
var result = toTheNthPower(4, 5);
console.log(result);

//*********PROBLEM 4-----SOLUTION:
//function declaration
function areaOfACircle(radius) {
    if(radius < 0){
        return "Radius cannot be negative!";
    }else{
        return Math.PI * radius * radius;
    }
}
//test code
var result = areaOfACircle(-1);
console.log(result);

//*********PROBLEM 5-----SOLUTION:
//function declaration
function pythagoreanTheorem(a, b) {
    return Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
}
//test code
var result = pythagoreanTheorem(3, 4);
console.log(result);
// should display 5;

//*********PROBLEM 6-----SOLUTION:
//function declaration
function isXEvenlyDivisibleByY(x, y) {
    return (x%y === 0) ? true :false;
}
//test code
var result = isXEvenlyDivisibleByY(99, 3);
console.log(result);

//*********PROBLEM 7-----SOLUTION:
//function declaration
function countVowels(word) {
    var count = word.match(/a|e|i|o|u|y/ig);
    return count ? count.length : 0;
}
//test code
var result = countVowels("stEAling");
console.log(result);
// displays 3

//*********PROBLEM 8-----SOLUTION:
//function declaration
function findWdi(arr){
    return (arr.indexOf("wdi")==-1) ? false : true;
}
//test code
var result = findWdi([1,2,3]);
console.log(result);

//*********PROBLEM 9-----SOLUTION:
//function declaration
function printTriangle(length) {
    for(var i=0; i<length; i++){
        var str = '';
        for(var j=0; j<=i; j++){
           str += '*';
        }
        console.log(str);
    }
    return;
}
//test code
printTriangle(5);

//*********PROBLEM 10-----SOLUTION:
//function declaration
function printPyramid(length) {

    for(var i=0; i<length; i++){
        var str = '';
        for(var j=0; j<length-i; j++){
            str += " ";
        }
        for(var k=0; k<=i;k++){
            str += '*';
            str += " ";
        }
        console.log(str);
    }
    return;
}
//test code
printPyramid(10);
