
(function (window){
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var index in names) {
    var firstLetter = names[index].charAt(0).toLowerCase();
    if (firstLetter == 'j') {
      byeSpeaker.speak(names[index]);
    } else {
      helloSpeaker.speak(names[index]);
    }
  }

  // requirements #2
  console.log("\n\n--Requirements #2--")
  var concatNames = function(name) {
    var firstLetter = name.charAt(0).toLowerCase();
    if (firstLetter == 'j') {
      return simpleByeSpeaker.speakSimple(name);
    } else {
      return simpleHelloSpeaker.speakSimple(name);
    }
  }
  const greetings = names.map((name) => concatNames(name));
  for (var index in greetings) {
    console.log(greetings[index]);
  }
  // end of requirements #2

  // requirements #3
  console.log("\n\n--Requirements #3--")
  var initialGreetingsObj = {hello: [], bye: []};
  var finalGreetingsObj = names.reduce(
    (accumulator, currentValue) => {
      var firstLetter = currentValue.charAt(0).toLowerCase();
      if (firstLetter == 'j') {
        accumulator.bye.push(simpleByeSpeaker.speakSimple(currentValue));
      } else {
        accumulator.hello.push(simpleHelloSpeaker.speakSimple(currentValue));
      };
      return accumulator;
    }, initialGreetingsObj
  );
  
  for (var obj in finalGreetingsObj) {
    for (var index in finalGreetingsObj[obj]){
      console.log(finalGreetingsObj[obj][index])
    }
  }
  // end of requirements #3

})(window);


