// add solution here

function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (let i=0; i<musicians.length; i++) {
    array[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return array
}


function johnLennonFacts(facts) {
  var i = 0;
  while(i <= facts.length) {
    facts[i] = facts[i] + "!!!";
    i++;
    console.log(i)
    console.log(facts.length)
  }
  return facts
}

function iLoveTheBeatles(number) {
  var store = []
  do {
    store.push("I love the Beatles!")
  }
  while(number<15);
  
  return store
}

