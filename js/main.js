function Calculator(){
  this.input = document.getElementById('input');
  this.currentResult = '';


  this.appendNumber = function(number){
    this.currentResult += number;
    this.input.value = this.currentResult;
  };

  this.appendOperator = function(operator){
    this.currentResult += operator;
    this.input.value = this.currentResult;
  }

  this.calculate = function(){
    try{
      this.currentResult = eval(this.currentResult);
      this.input.value = this.currentResult;
    } catch(error){
      alert("Error");
    }

  }


}

var calculator = new Calculator();