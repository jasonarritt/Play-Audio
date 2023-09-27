const button = document.querySelector('button');
const animals = document.querySelectorAll('.animal');

const animalArray = ['dog', 'cougar', 'lion'];
document.addEventListener('DOMContentLoaded', init);

function init() {
  console.log('init');
  animalArray.forEach(function (animal) {
    console.log(animal);
    let div = document.createElement('div');
    div.setAttribute('class', 'animal' + item);
    div.innerText = animal.toUpperCase();
    div.addEventListener('click', function () {
      playIt(animal);
    });
    document.body.appendChild(div);
  });
}

function addStyle(name) {
  let activeEl = document.querySelector('.' + name);
  console.log(activeEl);
  activeEl.classList.add('active');
  setTimeout(function () {
    activeEl.classList.remove('active');
  }, 1000);
}

function playIt(name) {
  let activeEl = document.querySelector('.' + name);
  let sound = new Audio('sound/' + name + '.mp3');
  sound.play();
  activeEl.classList.add('active');
  setTimeout(function () {
    activeEl.classList.remove('active');
  }, 1000);
}

for (var i = 0; i < animals.length; i++) {
  animals[i].addEventListener('click', function () {
    let animal = this.innerHTML;
    let lowerAnimal = animal.toLowerCase();
    // makeSound(lowerAnimal);
    // addStyle(lowerAnimal);
    playIt(lowerAnimal);
  });
}

// button.addEventListener('click', function () {
//   console.log(bark);
//   let duration = bark.duration;
//   let muted = bark.muted;
//   console.log(duration);
//   console.log(muted);
//   bark.play();
// });

// function makeSound(name) {
//   console.log(name);

//   switch (name) {
//     case 'dog': {
//       let dog = new Audio('sound/bark.mp3');
//       //   dog.play();
//     }
//     case 'cougar': {
//       let cougar = new Audio('sound/cougar.mp3');
//       //   cougar.play();
//     }
//     case 'lion': {
//       let lion = new Audio('sound/lion.mp3');
//       //   lion.play();
//     }
//   }
// }
