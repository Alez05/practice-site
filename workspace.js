const characters = [
  {
    name: 'Monkey D Luffy',
    height: '178',
    mass: '180',
    eye_color: 'dark',
    gender: 'male',
  },
  {
    name: 'Osamu Dazai',
    height: '175',
    mass: '160',
    eye_color: 'yellow',
    gender: 'male',
  },
  {
    name: 'Cat Bulgar Nami ',
    height: '178',
    mass: '100',
    eye_color: 'brown',
    gender: 'female',
  },
  {
    name: 'Edward Newgate',
    height: '666',
    mass: '400',
    eye_color: 'blue',
    gender: 'male',
  },
];

//WORKSPACE

// ## MAP

// 1. Get an array of all names

const name = characters.map((character) => {
  return character.name;
});
console.log(name);
// 2. Get an array of all heights
const heights = characters.map((character) => {
  return character.height;
});
console.log(heights);
// 3. Get an array of objects with just name and height properties
const fieldRecords = characters.map((muist) => ({
  name: muist.name,
  mass: muist.mass,
}));
console.log(fieldRecords);
// 4. Get an array of all first names
const firstNames = characters.map((music) => music.name.split(' '));
console.log(firstNames);

const gearEyes = characters.map((carti) => ({
  eye_color: carti.eye_color,
  gender: carti.gender,
}));
console.log(gearEyes);
// ## REDUCE

// 1. Get the total mass of all characters
// 2. Get the total height of all characters
// 3. Get the total number of characters in all the character names
// 4. Get the total number of characters by eye color (hint. a map of eye color to count)

// ## FILTER

// 1. Get characters with mass greater than 100
// 2. Get characters with height less than 200
// 3. Get all male characters
// 4. Get all female characters

// ## SORT

// 1. Sort by name
// 2. Sort by mass
// 3. Sort by height
// 4. Sort by gender

// ## EVERY

// 1. Does every character have blue eyes?
// 2. Does every character have mass more than 40?
// 3. Is every character shorter than 200?
// 4. Is every character male?

// ## SOME

// 1. Is there at least one male character?
// 2. Is there at least one character with blue eyes?
// 3. Is there at least one character taller than 200?
// 4. Is there at least one character that has mass less than 50?
