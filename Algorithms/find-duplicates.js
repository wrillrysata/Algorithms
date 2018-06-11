 function removeDuplicates(str){
   str = str.replace(/[@#?_/]/gi, ''); //clear @ and # from string
   str.split('');
   var sorted = {};
   var hash = new Map()
   var duplicates =[];
   var newArr = [];
   for(i=0;i<str.length;i++){
     
  if(hash.get(str[i]) === undefined){
    hash.set(str[i], true);
  }else{
    const value = hash.get(str[i]);
    if(value){
      hash.set(str[i], !value);
    }
  }
       
     }
     //sort string
   hash.forEach((v,k)=> {
     if(!v){
       duplicates.push(k);
     }
     
   });
   hash.forEach((i,j)=> {
     newArr.push(j);
                });
   newArr.sort();
     sorted['uniques'] = newArr.join('');
   
   sorted['duplicates'] = duplicates.length;
   return sorted;
    
   }
   
   
 

