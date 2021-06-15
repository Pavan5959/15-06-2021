let promise = new Promise(function(resolve, reject){
  setTimeout(function(){
    resolve('done!');
  },2000)
})

promise.then(function(data){
  console.log(data);
})

console.log('promises');
