// first method
(function(window){
  var helloSpeaker = {};
  var speakWord = "Hello";
  helloSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
  }
  window.helloSpeaker = helloSpeaker;
})(window);

// second method
(function(window){
  var simpleHelloSpeaker = {};
  var speakWord = "Hello";  
  simpleHelloSpeaker.speakSimple = function(name){
    return speakWord + " " + name;
  }
  window.simpleHelloSpeaker = simpleHelloSpeaker;
})(window);

