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
/*const name = characters.map((character) => {
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
console.log(gearEyes);*/

// ## REDUCE
/*
// 1. Get the total mass of all characters
const totalMass = characters.reduce((acc, cur) => {
  return acc + cur.mass;
}, 0);
console.log(totalMass);
// 2. Get the total height of all characters
const totalHeight = characters.reduce((acc, cur) => {
  return acc + cur.height;
}, 0);
console.log(totalHeight);
// 3. Get the total number of characters in all the character names
const charactersByEyeColor = characters.reduce((acc, cur) => {
  const color = cur.eye_color;
  if (acc[color]) {
    acc[color]++;
  } else {
    acc[color] = 1;
  }
  return acc;
}, {});
console.log(charactersByEyeColor);
// 4. Get the total number of characters by eye color (hint. a map of eye color to count)
const totalNameCharacters = characters.reduce((acc, cur) => {
  return acc + cur.name.length;
}, 0);
console.log(totalNameCharacters);
*/

// ## FILTER

/*// 1. Get characters with mass greater than 100
const massGreater = characters.filter((character) => {
  return character.mass > 100;
});

console.log(massGreater);
// 2. Get characters with height less than 200
/*const shortCharacters = characters.filter((character) => {
  return character.height < 200;
});
console.log(shortCharacters);
const getCharachters = characters.filter((character) => {
  return character.height < 200;
});
console.log(getCharachters);
/*const shCharacters = characters.filter((character) => {
  return character.height >= 150;
});
console.log(shCharacters);
// 3. Get all male characters
const maleCharacters = characters.filter((character) => {
  return character.gender === 'male';
});
console.log(maleCharacters);
// 4. Get all female characters
const femaleCharacters = characters.filter((character) => {
  return character.gender === 'female';
});
console.log(femaleCharacters);
*/
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
