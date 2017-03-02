function loopyLighthouse(range, multiples, words){
  var rangeA = range[0];
  var rangeB = range[1];
  var multiplesA = multiples[0];
  var multiplesB = multiples[1];
  var wordsA = words[0];
  var wordsB = words[1];

  var x = rangeA;
  while (x <= rangeB) {
    if (x % multiplesA === 0 && x % multiplesB === 0) {
      console.log(wordsA + wordsB);
    } else if (x % multiplesA === 0) {
      console.log(wordsA);
    } else if (x % multiplesB === 0) {
      console.log(wordsB)
    }
  else console.log(x);
    x++;
  }
}