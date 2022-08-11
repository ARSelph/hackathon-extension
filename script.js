const body = document.querySelector('body');
//body.innerText = 'Can you see this??';
//const board = document.querySelector('#board');
//const head = new Head(board);

const image = document.createElement("img");
image.id = 'shrekFace';
console.log()
body.appendChild(image);


const quotes = [
  "Get off of me swamp!",
  "Donkayyyy!",
  "Well it\'s no wonder you don\'t have any friends.",
  "Onions have layers, Ogres have layers.",
  "Somebody once told me the world is gonna roll me...",
  "That'll do Donkey, that'll do.",
  "Donkey, you have the right to remain silent. What you lack is the capacity.",
  "Squeeze the jelly from your eyes! Actually, it\'s quite good on toast.",
  "Well, That\'s Not Very Nice. It\'s Just A Donkey.",
  "Do you think maybe he's compensating for something?",
  "Hey! I'm no one's messenger boy, all right? I'm a delivery boy.",
  "What are you doing in my swamp?",
];




const quoteBox = document.createElement("div");
quoteBox.id = 'quoteBox';
body.appendChild(quoteBox);


const quote = document.createElement("h2");
quote.id = 'quote';
quote.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];

body.appendChild(quote);

// setTimeout(() => body.querySelector("#quote").innerHTML = quotes[Math.floor(Math.random() * quotes.length)],  4000);
// setTimeout(() => body.querySelector("#quote").innerHTML = quotes[Math.floor(Math.random() * quotes.length)],  4000);
setTimeout(enterQuote, 2000);



function enterQuote () {
  let opacity = Number(body.querySelector('#quote').style.opacity);
  if (opacity < 1) {
    opacity += 0.1;
    body.querySelector('#quote').style.opacity = opacity.toString();
    body.querySelector('#quoteBox').style.opacity = opacity.toString();
    setTimeout(enterQuote, 50);
  } else setTimeout(exitQuote, 4000);
}

function exitQuote () {
  let opacity = Number(body.querySelector('#quote').style.opacity);
  if (opacity > 0) {
    opacity -= 0.1;
    body.querySelector('#quote').style.opacity = opacity.toString();
    body.querySelector('#quoteBox').style.opacity = opacity.toString();
    setTimeout(exitQuote, 50);
  }
  else {
    body.querySelector("#quote").innerHTML = quotes[Math.floor(Math.random() * quotes.length)]
    setTimeout(enterQuote, 2000);
  }
}


//document.write('<audio id="player" src="" >');
//document.getElementById('player').play();


// const sound = new Audio("https://soundbible.com/477-R2D2.html");
// sound.play();
// setTimeout(sound.play, 2000);

// sound.addEventListener('canplaythrough', (e) =>{
//     sound.play();
// })



// body.addEventListener('keydown', (e) => {
//   if (e.code === 'ArrowDown') {
//     console.log('pressed down');
//     head.currentDirection = 'down';
//     body.querySelector('#shrekFace').style.content =  "url(https://p.kindpng.com/picc/s/156-1569003_jack-sparrow-transparent-png-png-download.png");
//   }
// });
