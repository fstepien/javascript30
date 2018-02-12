const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('hello');
// Interpolated
console.log('Hello I am a %s string!', '5');
// Styled
console.log('%c I am some great text', 'background: red;');
// warning!
console.warn('OH NOO');
// Error :|
console.error('Error');
// Info
console.info('Crocodile eat 3-4 people per year');
// Testing
console.assert(1===2, 'you did not select the right element');
// clearing
console.clear();

// Viewing DOM Elements
const p = document.querySelector('p');
console.log(p);
console.dir(p);
// Grouping together
console.clear();
dogs.forEach(dog => {

console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log((`${dog.name} is ${dog.age}`));
  console.groupEnd(`${dog.name}`)
});
// counting

console.count('Wes');

// timing

console.time('fetchin data');
fetch('https://api.github.com/users/wesbos')
.then(data => data.json())
.then(data => {

console.log(data);
console.timeEnd('fetching data');
});

console.table(dogs);