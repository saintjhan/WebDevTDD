function greet (name, owner) {
    const own = 'Hello boss!';
    const not = 'Hello guest!';
    if (name === owner){
       return own;
    }
       else {
         return not;
       }
  }

  module.exports = greet;