function grow(x){
    return x.reduce(function(a, b){
    return a * b;           
      })
  }

  module.exports = grow;