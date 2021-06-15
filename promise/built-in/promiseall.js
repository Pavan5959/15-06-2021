/*one resolve one reject*/
let promise1 = new Promise(function(resolve, reject){
  setTimeout(function(){
      resolve('resolved');
  }, 2000)
})

let promise2 = new Promise(function(resolve, reject){
  setTimeout(function(){
    reject('rejected');
  },4000)
})

Promise.all([promise1, promise2])
       .then(function(data){
  console.log(data);
}) .catch(function(error){
  console.log(error);
  
})
