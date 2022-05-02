const Promise = require('promise');

makeTimeoutsPromises = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.8) {
        reject('Fail!');
      } else {
        resolve(Math.floor(Math.random() * 5000));
      }
    }, time);
  });
};

makeTimeoutsPromises(1000)
  .then((x) => {
    console.log(x);
    return makeTimeoutsPromises(x);
  })
  .then((x) => {
    console.log(x);
    return makeTimeoutsPromises(x);
  })
  .then((x) => {
    console.log(x);
    return makeTimeoutsPromises(x);
  })
  .then((x) => {
    console.log(x);
    return makeTimeoutsPromises(x);
  })
  .then((x) => console.log(x))
  .catch((x) => console.error(x))
  .finally(() => {
    console.log('All is done!');
  });

/////////////////////////////////////////////////////////////////
///The trick here is that .finally() needs to take a function  //
///as it's parameter.  If you pass in console.log() without    //
///wrapping it in an arrow function you'll run into the        //
///frustrating circumstance of the All is done! message always //
///displaying immediately upon execution.                      //
/////////////////////////////////////////////////////////////////
