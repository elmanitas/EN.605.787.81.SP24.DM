// first method
(function(window){
  var byeSpeaker = {};
  var speakWord = "Good Bye";
  byeSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
  }
  window.byeSpeaker = byeSpeaker;
})(window);

// second method
(function(window){
  var simpleByeSpeaker = {};
  var speakWord = "Good Bye";
  simpleByeSpeaker.speakSimple = function(name){
    return speakWord + " " + name;
  }
  window.simpleByeSpeaker = simpleByeSpeaker;
})(window);
