// lexical scope

function outerfunction() {
  var name = "Mozilla";
  {
    let name="wow";
  } // var--name is a local variable created by outerfunction
  function displayName() {
    // displayName() is the inner function, that forms a closure
    let name="waheguru";
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
outerfunction();



function outerFunction() {
  let name = "Babbar";

  function innerFunction() {
    console.log(name);
  }

  return innerFunction;
}
let inner = outerFunction();  // pass reference ofinnerFunction in outerfunctioin 

inner();
