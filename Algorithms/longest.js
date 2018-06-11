function longest(sentence){
  var str = sentence.split(' ');
  let max_length = 0;
  for(i=0;i<str.length;i++){
    if(str[i].length > max_length){
      max_length = str[i].length;
      var word = str[i];
    }
  }
  return word;
  
}
