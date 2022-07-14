'use strict'

let userName = prompt('Hello there, and welcome to my home page. Before we get started, let me ask you a question. What is your name?')
alert ('Welcome ' + userName + ". I hope that you are having a great day.");
alert ('Before we get started, read this little intro about me. And pay attention, for I have a little quiz for you after my little presentation.')
alert ('My name is Alfredo Orquiz. Born in the US and raised in Mexico. I moved here to live in Seattle on February 18, 2022. I have a bit of a sweet tooth, for I like to eat jasmine rice with syrup for breakfast, and I LOVE chocolate. My favorite foods are sushi, tacos, and bacon. I LOVE bacon so much that if I could, I would put it on EVERYTHING. For my hobbies, I play the guitar, the violin, and the flute, go for walks, drive around, learn new languages, anything to keep me active and to learn.')
let washington = prompt('Do I live in Wahington State?').toLowerCase();
if(washington === 'yes' || washington === 'y') {
  alert ('Correct, I do live in Washington.')
} else if (washington === 'no' || washington === 'n') {
  alert('The question was, "Do I live in Washington". Try again.')
} else {
  alert('Unacceptable answer, you have to answer with a Yes(Y) or a No(N).')
}
let chocolate = prompt('Do I LOVE chocolate?').toLowerCase();
if(chocolate === 'yes' || chocolate === 'y') {
  alert ('You are correct again, I do LOVE chocolate. Who doesn\'t tho, Right?')
} else if (chocolate === 'no' || chocolate === 'n') {
  alert('Nope, I do Love chocolate. You should\'ve guessed by the capitalized LOVE.')
} else {
  alert('My guy, you\'ve gotta answer the question with a Yes(Y) or a No(N).')
}
let bacon = prompt('Do I LOVE BACON?').toLowerCase();
if(bacon === 'yes' || bacon === 'y') {
  alert ('OF COURSE I LOVE BACON. It\'s the best breakfast meal of the day.')
} else if (bacon === 'no' || bacon === 'n') {
  alert('Let me guess, you eat vegan bacon huh?')
} else {
  alert('My guy, we\'ve been through this, you\'ve gotta answer the question with a Yes(Y) or a No(N). This is elementary things Watson.')
}
let rhetorical = prompt('If I could, would I put bacon on everything?').toLowerCase();
if(rhetorical === 'yes' || rhetorical === 'y') {
  alert ('That was a rhetorical question, of course I would.?')
} else if (rhetorical === 'no' || rhetorical === 'n') {
  alert('Hah, you thought you knew me, but I guess you didn\'t. Try again.')
} else {
  alert('My guy, you\'ve gotta answer this question with a Yes(Y) or a No(N). Do I need to hold your hand through this Watson?')
}
let instrument = prompt('Do I like play the ukelele?').toLowerCase();
if(instrument === 'no' || instrument === 'n') {
  alert ('Correct, I don\'t play the ukelele. I play the guitar and violin, not the ukelele.')
} else if (instrument === 'yes' || instrument === 'y') {
  alert('Not quite right. I play the guitar and violin, not the ukelele.')
} else {
  alert('My guy, you\'ve gotta be trolling me. There is no way you can\'t follow simple instructions. Answer the question with a Yes(Y) or a No(N). This is elementary stuf we learn Watson. Elementary!.')
}
let aboutMe = prompt('Do you wanna know more about me?').toLowerCase();
if(aboutMe === 'yes' || aboutMe === 'y') {
  alert ('Ok, I guess I can tell you a little about me.')
} else if (aboutMe === 'no' || aboutMe === 'n') {
  alert('To bad, I\'m going to anyways.')
} else {
  alert('My guy, let\'s just go now.')
}
let birthYear = '1997';
let attempts = 4;
for (let i = attempts; i > 0; i--){
  let guessAge = prompt('What year was I born in?');
  if (guessAge === birthYear){
    alert('You\'ve Got it. I was indeed born in 1997.');
    break;
  } else if (guessAge < birthYear){
    alert(`Not quite. You\'ve guess is a bit low. you have ${attempts - 1} remaining.`)
  } else if (guessAge > birthYear){
    alert(`Not quite. You\'ve guessed a bit higher. You have ${attempts - 1} remaining.`)
  } else if (attempts = 0){
    alert('Sorry. You are out of attempts.')
  }
}
