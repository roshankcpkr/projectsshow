function dis(val) {
    document.getElementById("result").value += val;
  }
  
  //function that evaluates the digit and return result
  function answer() {
    let x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value = y;
  }
  
  //function that clears 
  function clear() {
    document.getElementById("result").value = "";
  }