const set = new Set([1,2,3,3,3,3,4,5,5,6]);
console.log(set);
set.add(10).add(30).add(10).delete(1)
console.log(set);

function uniqValues(array){
  return  [...new Set(array)]

}
console.log(uniqValues([1,1,1,1,2,2,2,2,33,3,3,44,44,4,5,5,5,5]))