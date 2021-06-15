/*promise2 checked due to timeout difference*/
let promise1 = new Promise(function(resolve, reject){
  setTimeout(function(){
      resolve('resolved');
  }, 8000)
})

let promise2 = new Promise(function(resolve, reject){
  setTimeout(function(){
    reject('rejected');
  },2000)
})

Promise.race([promise1, promise2])
       .then(function(data){
  console.log(data);
}) .catch(function(error){
  console.log(error);
  
})

// "rejected"
