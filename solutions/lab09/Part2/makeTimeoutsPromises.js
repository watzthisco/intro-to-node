// makeTimeoutsPromises = () => {
// 	return new Promise((resolve, reject) => {
// 		if (Math.random() > 0.8) {
// 			reject('Fail!');
// 		} else {
// 			resolve("It is done.");
// 		}
// 	});
// }

makeTimeoutsPromises = (time) => {
	return new Promise((resolve, reject) => {
		setTimeout(() =>{
			if (Math.random() > 0.8) {
				reject('Fail!');
			} else {
				resolve(Math.floor(Math.random() * 5000));
			}
		}, time);
	});
}

// makeTimeoutsPromises()
// .then(x => console.log(x));

makeTimeoutsPromises()
.then(x=>{
	console.log(x);
	return makeTimeoutsPromises(x);})
.then(x=>{
	console.log(x);
	return makeTimeoutsPromises(x);})
.then(x=>{
	console.log(x);
	return makeTimeoutsPromises(x);})
.then(x=>{
	console.log(x);
	return makeTimeoutsPromises(x);})
.then(x=>console.log(x))
.catch(x=>console.error(x));