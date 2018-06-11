
// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
var i;
var oldest;
var secondoldest;
var oldestages;
for(i=0;i<ages.length;i++)
{
 oldest = Math.max(ages[i]);
 if(ages[i] < oldest)
 {
 secondoldest = ages[i];
 }
 }
 oldestages = [secondoldest, oldest];
 return oldestages;
}

