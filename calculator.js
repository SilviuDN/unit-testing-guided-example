function sum(a = 0, b = 0) {
  return a+b;
}

function subtract(a = 0, b = 0) {
  return a-b;
}

function divide(a, b = 0) {
  if(b==0){
    throw new Error('Divider cannot be null')
  }
  return a/b
  // try{
  //   return a/b
  // }catch(e){
  //   console.log(e)
  //   throw new Error(e)
  // }
}

function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
