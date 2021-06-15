function waitAsecond(seconds){
  
return new Promise(function(resolve, reject){
  setTimeout(function(){
    seconds++;
    resolve(seconds);
  },2000)
})
}

waitAsecond(0).then(waitAsecond)
              .then(function(data){
              console.log(data);
})
