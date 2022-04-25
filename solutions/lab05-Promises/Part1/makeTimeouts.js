makeTimeouts = (time, callback) => {
	setTimeout(() => {
		if(Math.random() > 0.8) {
			callback('Fail!');
		} else {
			callback(undefined, Math.floor(Math.random() * 5000));
		}
	}, time);
};

// makeTimeouts(1000, (err,data) => {
// 	if(err) {
// 		console.error(err);
// 	} else {
// 		console.log(data);
// 	}
// });

makeTimeouts(1000, (err,data) => {
	if(err) {
		console.error(err);
	} else {
		console.log(data);
		makeTimeouts(data, (err,data) => {
			if(err) {
				console.error(err);
			} else {
				console.log(data);
				makeTimeouts(data, (err,data) => {
					if(err) {
						console.error(err);
					} else {
						console.log(data);
						makeTimeouts(data, (err,data) => {
							if(err) {
								console.error(err);
							} else {
								console.log(data);
								makeTimeouts(data, (err,data) => {
									if(err) {
										console.error(err);
									} else {
										console.log(data);
									}
								});
							}
						});

					}
				});
			}
		});
	}
});

console.log('boom!');