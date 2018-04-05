var min = function(a, b) {
  if (a < b) return a;
  else return b;
}

var isEven = function(number) {
	if (number < 0) return isEven(-number);
  else if (number == 0) return true;
  else if (number == 1) return false;
  else return isEven(number - 2);
}

var countBs = function(str) {
  return countChar(str, 'B');
}

var countChar = function(str, char) {
  return str.split('').filter(letter => letter == char).length; 
}