function second(seconds){
  return new Promise(function(resolve, reject){
    if(seconds > 2){
      reject('rejected');
    }
    else{
      setTimeout(function(){
        seconds++;
        resolve(seconds);
      },1000);
    }
  })
}

second(2).then(second)
         .then(second)
         .then(function(data){
         console.log(data);
})      .catch(function(error){
         console.log(error);
})

