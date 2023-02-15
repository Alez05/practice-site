// function createCircle(radius) {
//   return {
//     radius,
//     draw: function () {
//       console.log('draw');
//     },
//   };
// }

// const circle = createCircle(1);

// const Circle = (radius) => {
//   this.radius = radius;
//   this.draw = function () {
//     console.log('draw');
//   };
// };

// Circle.call({}, 1);
// Circle.apply({}, 1, 2, 3);

// const another = new Circle(1);

// let x = { value: 10 };
// let y = x;

// x.value = 20;

// let obj = { value: 10 };

// const increase = (obj) => {
//   return obj.value++;
// };

// increase(obj);

// console.log(obj);

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log(draw);
//   };
// }

// const circle = new Circle(10);

// for (let key in circle) {
//   if (typeof circle[key] !== 'function') console.log(key, circle[key]);
// }

// const keys = Object.keys(circle);
// console.log(keys);

// if ('radius' in circle) {
//   console.log('Circle has a radius');
// }
//OOP
/*
function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  this.getDefaultLocation = function () {
    return defaultLocation;
  };

  this.draw = function () {
    optimumLocation(0.1);
    console.log(draw);
  };

  Object.defineProperty(this, 'defaultLocation', {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      defaultLocation = value;
    },
  });
}

const circle = new Circle(10);
circle.defaultLocation = 1;
*/

//Stop Watch

function Stopwatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  this.start = function () {
    if (running) console.log('stopWatch has already started');

    running = true;

    startTime = new Date();

    // return start;
  };

  this.stop = function () {
    if (!running) console.log('stopWatch has not started');
    running = false;
    endTime = new Date();

    this.seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;

    // return stop;
  };

  this.reset = function () {
    startTime = null;
    endTime = null;
    running = true;
    duration = 0;
    // return reset;
  };

  Object.defineProperty =
    (this,
    'duration',
    {
      get: () => {
        return duration;
      },
    });
}
