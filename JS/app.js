'use strict'

alert ('Greatings loved ones');
let washington = prompt('Do I live in Wahington State?').toLowerCase();
if(washington === 'yes' || washington === 'y') {
  alert ('Why yes, I do live in Washingtong. Do you live in Washington as well?')
} else if (washington === 'no' || washington === 'n') {
  alert('The question was, "Do I live in Washington". Try again.')
} else {
  alert('Unacceptable answer, you have to answer with a Yes(Y) or a No(N).')
}
let chocolate = prompt('Do I LOVE chocolate?').toLowerCase();
if(chocolate === 'yes' || chocolate === 'y') {
  alert ('Why yes, I do LOVE chocolate. Who doesn\'t tho, Right?')
} else if (chocolate === 'no' || chocolate === 'n') {
  alert('Nope, I do Love chocolate. You should\'ve guessed by the capitalized LOVE.')
} else {
  alert('My guy, you\'ve gotta answer the question with a Yes(Y) or a No(N).')
}
let bacon = prompt('Do I LOVE BACON?').toLowerCase();
if(bacon === 'yes' || bacon === 'y') {
  alert ('Why yes, I do LOVE BACON. It\'s the best breakfast meal of the day.')
} else if (bacon === 'no' || bacon === 'n') {
  alert('Let me guess, you eat vegan bacon huh?')
} else {
  alert('My guy, we\'ve been through this, you\'ve gotta answer the question with a Yes(Y) or a No(N). This is elementary things Watson.')
}
let rhetorical = prompt('If I could, would I put bacon on everything?').toLowerCase();
if(rhetorical === 'yes' || rhetorical === 'y') {
  alert ('That was a rhetorical question, of course I would, but, how did you know?')
} else if (rhetorical === 'no' || rhetorical === 'n') {
  alert('Hah, you thought you knew me, but I guess you didn\'t. Try again.')
} else {
  alert('My guy, you\'ve gotta answer this question with a Yes(Y) or a No(N). Do I need to hold your hand through this Watson?')
}
let soccer = prompt('Do I like playing soccer (AKA the REAL Football)?').toLowerCase();
if(soccer === 'yes' || soccer === 'y') {
  alert ('Why yes, I do enjoy playing soccer. You seem to know too much. Suspicious.')
} else if (soccer === 'no' || soccer === 'n') {
  alert('Don\'t tell me, American Football is the real Football. Nice try, and try again.')
} else {
  alert('My guy, you\'ve gotta be trolling me. There is no way you can\'t follow simple instructions. Answer the question with a Yes(Y) or a No(N). This is elementary stuf we learn Watson. Elementary!.')
}
let clown = prompt('Do I believe that I am a funny guy?').toLowerCase();
if(clown === 'yes' || clown === 'y') {
  alert ('Why yes, I do live in Washingtong. Are you stalking me?')
} else if (clown === 'no' || clown === 'n') {
  alert('Hah, you thought you knew me, but I guess you didn\'t. Try again.')
} else {
  alert('My guy, either stop trolling, or I\'ve lost faith in you. You gotta answer the question with a Yes(Y) or a No(N).')
}
let aboutMe = prompt('Do you wanna know something about me?').toLowerCase();
if(aboutMe === 'yes' || aboutMe === 'y') {
  alert ('Ok, I guess I can tell you a little about me.')
} else if (aboutMe === 'no' || aboutMe === 'n') {
  alert('To bad, I\'m going to anyways.')
} else {
  alert('My guy, let\'s just go now.')
}