
var timer = document.getElementById("timer");
var timeRemaining = 60;
var testPara = document.getElementById("testPara");
var textArea = document.getElementById("textArea");
var startWindow = document.getElementById("startWindow");
var startButton = document.getElementById("startButton");
var newTestWindow = document.getElementById("newTestWindow");
var newTestButton = document.getElementById("newTestButton");
var score = 0;
var timerStarted = false;


function calculateResults(originalText, typedText, totalTime = 60) {
  const originalWords = originalText.trim().split(/\s+/);
  const typedWords = typedText.trim().split(/\s+/);

  let correctWords = 0;
  let errors = 0;

  for (let i = 0; i < typedWords.length; i++) {
    if (typedWords[i] === originalWords[i]) {
      correctWords++;
    } else {
      errors++;
    }
  }

  const timeInMinutes = totalTime / 60;
  const wpm = Math.round(correctWords / timeInMinutes);

  const accuracy = typedWords.length === 0
    ? 0
    : Math.round((correctWords / typedWords.length) * 100);

  return { wpm, accuracy, errors };
}


var generatePassage = function(){ 
	
	paraContainer.style.display = "inline-block";
	textArea.style.display = "inline-block";
	var passages = [passage1, passage2, passage3, passage4, passage5];
    testPara.innerHTML = passages[Math.floor(Math.random() * passages.length)];

};


var displayTime = function () {
  if (timerStarted) return;
  timerStarted = true;

  var getTime = setInterval(function() {
    timeRemaining--;
    timer.innerHTML = "Time Remaining: " + timeRemaining + "s";

    if (timeRemaining === 0) {
      clearInterval(getTime);

      var result = calculateResults(
        testPara.innerText,
        textArea.value,
        60
      );

      wrapper.remove();
      timer.remove();

      document.getElementById("finalScore").innerHTML =
        `WPM: ${result.wpm} | Accuracy: ${result.accuracy}% | Errors: ${result.errors}`;

      newTestWindow.style.display = "block";
    }
  }, 1000);
};



var test = function() {
  startWindow.style.display = "none";
  timer.innerHTML = "Time Remaining: 60s";
  timer.style.display = "block";
  textArea.addEventListener("input", displayTime);
  generatePassage();
};

startButton.addEventListener("click", test);


newTestButton.addEventListener("click", function(){
	window.location.reload();
});



var passage1 = "The quick brown fox jumps over the lazy dog. Typing regularly helps improve speed and accuracy. Consistent practice builds muscle memory over time. Focus on accuracy first, then gradually increase speed.";

var passage2 = "Typing is an essential skill in today’s digital world. Improving typing speed requires consistent practice and focus. Accuracy is more important than speed in the beginning. Over time, efficiency and confidence will naturally improve.";


var passage3 = "Efficient typing reduces errors and increases productivity. Maintaining rhythm and posture helps avoid fatigue. Professional typists focus on accuracy under time pressure. Small improvements compound into significant results.";



var passage4 = "Regular typing practice improves hand coordination and focus. Maintaining accuracy while increasing speed is the key to progress. Avoid looking at the keyboard and rely on muscle memory instead. Consistent effort leads to noticeable improvement over time.";


var passage5 = "A steady typing rhythm helps reduce mistakes and fatigue. Correct posture and finger placement improve long-term efficiency. Small daily practice sessions are more effective than long breaks.Stay calm, stay focused, and type with confidence.";
