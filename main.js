var wpm = 230;
var harrisonAddress;
var harryStr;
var content;
var readingTime = function(){
  harrisonAddress = [].slice.call(document.querySelectorAll('p'));
  console.log(harrisonAddress.textContent);
  harrisonAddress.forEach(function(element, idx, array){
    console.log(element.textContent);
    content += element.textContent;
  });
  console.log(content);
  var finalString = content.split(" ");
  var numOfWords = finalString.length;
  var total = Math.round(numOfWords/wpm);
  return total + " minute read";
}
document.querySelector('header').innerHTML += readingTime();
