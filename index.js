const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = tutorials.map(function (tutName){
const wordArray = tutName.split(" ");
for (let i = 0; i < wordArray.length; i++){
 let letter = wordArray[i].charAt(0).toLocaleUpperCase();
 let realWords = wordArray[i].replace(wordArray[i].charAt(0), letter )
 wordArray[i] = realWords;
}
let titles = (wordArray.join(" "));
return titles;
});



console.log(titleCased);

