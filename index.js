function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let x = 0; x < musicians.length; x++) {
    array.push(`${musicians[x]} plays ${instruments[x]}`);
  }
  return array;
}

function johnLennonFacts(facts) {
  var n = facts.length;
  while (n > 0) {
    console.log(`${facts[n]}!!!`);
    --n;
  }
}
