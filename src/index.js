module.exports = function toReadable (number) {
  let arr = number.toString().split("");
  let letterArr = []
  for(let i = 0; i < arr.length; i++){
    arr[i] == 1 ? letterArr.push('one') : arr[i] == 2 ? letterArr.push('two') : arr[i] == 3 ? letterArr.push('three') : arr[i] == 4 ? letterArr.push('four'): arr[i] == 5 ? letterArr.push('five') : arr[i] == 6 ? letterArr.push('six'): arr[i] == 7 ? letterArr.push('seven') : arr[i] == 8 ? letterArr.push('eight') : arr[i] == 9 ? letterArr.push('nine') : letterArr.push('zero');  
  }
  function getTwoDigitNumber(){
    if(letterArr[0] == 'one'){
      return `${letterArr[1] == 'one' ? 'eleven':letterArr[1] == 'two' ? 'twelve': letterArr[1] == 'three' ? 'thirteen': letterArr[1] == 'four' ? 'fourteen': letterArr[1] == 'five' ? 'fifteen': letterArr[1] == 'six' ? 'sixteen': letterArr[1] == 'seven' ? 'seventeen': letterArr[1] == 'eight' ? 'eighteen': letterArr[1] == 'nine' ? 'nineteen': 'ten'}` 
    }
    if(letterArr[1] !== 'zero'){
      return `${letterArr[0] == 'two' ? 'twenty ' + letterArr[1]: letterArr[0] == 'three' ? 'thirty ' + letterArr[1]: letterArr[0] == 'four' ? 'forty ' + letterArr[1]: letterArr[0] == 'five' ? 'fifty ' + letterArr[1]: letterArr[0] == 'six' ? 'sixty ' + letterArr[1]: letterArr[0] == 'seven' ? 'seventy ' + letterArr[1]: letterArr[0] == 'eight' ? 'eighty ' + letterArr[1]: letterArr[0] == 'nine' ? 'ninety ' + letterArr[1]: 'unknown'}`
    }else{
      return `${letterArr[0] == 'two' ? 'twenty': letterArr[0] == 'three' ? 'thirty': letterArr[0] == 'four' ? 'forty': letterArr[0] == 'five' ? 'fifty': letterArr[0] == 'six' ? 'sixty': letterArr[0] == 'seven' ? 'seventy': letterArr[0] == 'eight' ? 'eighty': letterArr[0] == 'nine' ? 'ninety': 'unknown'}`  
    }
  }
  function getOneDigitNumber(){
    return letterArr[0];
  }
  function getOneDigitNumber2(){
    return letterArr[1];
  }

  function getThreeDigitNumber(){
    let hundred = letterArr[0];
    letterArr = letterArr.slice(1);
    if(letterArr[0] == 'zero' && letterArr[1] == 'zero'){
      return `${hundred} hundred`;   
    }else if(letterArr[0] == 'zero'){
      return `${hundred} hundred ${getOneDigitNumber2()}`;
    }else{
      return `${hundred} hundred ${getTwoDigitNumber()}`;
    }
    
  }
  if(arr.length == 1){
    return getOneDigitNumber();
  }
  else if(arr.length == 2){
    return getTwoDigitNumber();
  }else{
    return getThreeDigitNumber();
  }
    
}