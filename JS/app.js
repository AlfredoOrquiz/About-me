"use strict";
var score = 0;
var max_count = 5;
function greeting() {
  let userName = prompt(
    "Hello there, and welcome to my home page. Before we get started, let me ask you a question. What is your name?"
  );
  alert("Welcome " + userName + ". I hope that you are having a great day.");
  alert(
    "Before we get started, read this little intro about me. And pay attention, for I have a little quiz for you after my little presentation."
  );
  alert(
    "My name is Alfredo Orquiz. Born in the US in 1997 and raised in Mexico. I moved here to live in Seattle on February 18, 2022. My favorite song is Kings never die, echo, drop the world, or survival by Eminem. I have a bit of a sweet tooth, for I like to eat jasmine rice with syrup for breakfast, and I LOVE chocolate. My favorite foods are sushi, tacos, and bacon. I LOVE bacon so much that if I could, I would put it on EVERYTHING. For my hobbies, I play the guitar, the violin, and the flute, go for walks, drive around, learn new languages, anything to keep me active and to learn."
  );
}

function bioQuestion() {
  function firstQuestion() {
    let washington = prompt("Do I live in Wahington State?").toLowerCase();
    if (washington === "yes" || washington === "y") {
      alert("Correct, I do live in Washington.");
      console.log("Correct, I do live in Washington.");
      score++;
    } else if (washington === "no" || washington === "n") {
      alert('The question was, "Do I live in Washington". Try again.');
    } else {
      alert(
        "Unacceptable answer, you have to answer with a Yes(Y) or a No(N)."
      );
      if (--max_count > 0)
        firstQuestion();
    }
    console.log("Yes, I do live in Washington.");
  }

  function secondQuestion() {
    let chocolate = prompt("Do I LOVE chocolate?").toLowerCase();
    if (chocolate === "yes" || chocolate === "y") {
      alert(
        "You are correct again, I do LOVE chocolate. Who doesn't tho, Right?"
      );
      score++;
      console.log("You are correct again, I do LOVE chocolate. Who doesn't tho, Right?");
    } else if (chocolate === "no" || chocolate === "n") {
      alert(
        "Nope, I do Love chocolate. You should've guessed by the capitalized LOVE."
      );
    } else {
      alert(
        "My guy, you've gotta answer the question with a Yes(Y) or a No(N)."
      );
      if (--max_count > 0)
        secondQuestion();
    }
  }

  function thirdQuestion() {
    let bacon = prompt("Do I LOVE BACON?").toLowerCase();
    if (bacon === "yes" || bacon === "y") {
      alert("OF COURSE I LOVE BACON. It's the best breakfast meal of the day.");
      score++;
      console.log("You got the answer correct");
    } else if (bacon === "no" || bacon === "n") {
      alert("Let me guess, you eat vegan bacon huh?");
    } else {
      alert(
        "My guy, we've been through this, you've gotta answer the question with a Yes(Y) or a No(N). This is elementary things Watson."
      );
      if (--max_count > 0)
        thirdQuestion
    }
  }

  function fourthQuestion() {
    let rhetorical = prompt(
      "If I could, would I put bacon on everything?"
    ).toLowerCase();
    if (rhetorical === "yes" || rhetorical === "y") {
      alert("That was a rhetorical question, of course I would.?");
      console.log("You got the answer correct");
      score++;
    } else if (rhetorical === "no" || rhetorical === "n") {
      alert("Hah, you thought you knew me, but I guess you didn't. Try again.");
    } else {
      alert(
        "My guy, you've gotta answer this question with a Yes(Y) or a No(N). Do I need to hold your hand through this Watson?"
      );
      if (--max_count > 0)
        fourthQuestion();
    }
  }

  function fifthQuestion() {
    let instrument = prompt("Do I like play the ukelele?").toLowerCase();
    if (instrument === "no" || instrument === "n") {
      alert(
        "Correct, I don't play the ukelele. I play the guitar and violin, not the ukelele."
      );
      score++;
      console.log("You got the answer correct");
    } else if (instrument === "yes" || instrument === "y") {
      alert("Not quite right. I play the guitar and violin, not the ukelele.");
    } else {
      alert(
        "My guy, you gotta answer with yes (y) or no (n)."
      );
      if (--max_count > 0)
        fifthQuestion();
    }
  }

  firstQuestion();
  secondQuestion();
  thirdQuestion();
  fourthQuestion();
  fifthQuestion();
}

function sixthQuestion() {
  let birthYear = "1997";
  let attempts = 4;
  let guessAge;
  while (attempts) {
    guessAge = prompt("What year was I born in?");
    attempts--;
    if (attempts === 0) {
      alert("Sorry. You are out of attempts. The correct answer is 1997.");
      break;
    }
    if (guessAge === birthYear) {
      alert("You’ve Got it. I was indeed born in 1997.");
      console.log("You got the answer correct");
      score++;
      break;
    } else if (guessAge < birthYear) {
      alert(
        `Not quite. You\’ve guess is a bit low. you have ${attempts} remaining.`
      );
    } else if (guessAge > birthYear) {
      alert(
        `Not quite. You\’ve guessed a bit higher. You have ${attempts} remaining.`
      );
    }
  }
}
function seventhQuestion() {
  let favSong = [
    "kings never die", 
    "survival", 
    "drop the world", 
    "echo"
  ];
  let songAttempts = 6;
  while (songAttempts) {
    let songAnswer = prompt(`What is my favorite song? You have ${songAttempts} attempts left`).toLowerCase();
    songAttempts--;
    let isCorrect = false;
    if (songAttempts === 0) {
      alert(`Sorry, you are incorrect. ${songAnswer} is not my favorite song`);
    } else if ((songAnswer === favSong[0]) || (songAnswer === favSong[1]) || (songAnswer === favSong[2]) || (songAnswer === favSong[3])) {
      alert(`You are right! ${songAnswer} is my favorite song.`);
      console.log("You got the answer correct");
      score++;
      isCorrect = true;
      break;
    }
      else {
        alert ("You're wrong.");
      }
    }
  }

greeting();
bioQuestion();
sixthQuestion();
seventhQuestion();
alert(`You got ${score} answers right.`);
alert("End of test.");
