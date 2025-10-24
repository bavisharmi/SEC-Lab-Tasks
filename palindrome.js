let str = "madam"; 
let reversedStr = "";


for (let i = str.length - 1; i >= 0; i--) {
  reversedStr += str[i];
}

if (str === reversedStr) {
  console.log(`${str} is a palindrome`);
} else {
  console.log(`${str} is not a palindrome`);
}
