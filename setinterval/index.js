//create a function count fom 1 to 1 0
//return a promise
function countFrom(min, max){
	return new Promise(function(resolve, reject){
		if(min > max){
			reject('error.....');
		}else{
			var dem = setInterval(function(){
				console.log(min++);
				if(min > max){
					clearTimeout(dem);
					resolve();
				}
			}, 1000)
		}
	});
}

countFrom(1, 10)
	.then(function(times){
		console.log('done');
	})
	.catch(function(error){
		console.log(error);
	});