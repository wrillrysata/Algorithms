const sortArray =  (value) => value.sort((a,b) => a-b);
 
function mySort(nums) {
  let even = [];
  let odd = [];
 let numArr = [];
  var current_number;
  
  numArr = nums.filter(item => typeof(item) === 'number');
 numArr.map(current_number => {
   let num = Math.trunc(current_number);
   (num % 2) ? odd.push(num) : even.push(num);
    });
  
even = sortArray(even);
odd = sortArray(odd);

 return odd.concat(even);

}
