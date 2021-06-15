let promise = new Promise(function(resolve, reject){
  setTimeout(function(){
    reject('done!');
  },2000)
})

promise.then(function(data){
  console.log(data);
}, function(error){
  console.log('error ' + error );
})

console.log('promises');
