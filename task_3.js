const findLongestWord = function(string) {
    let arr = string.split(' ');
    arr.sort((a,b)=> a.length - b.length);
    console.log(arr[arr.length-1]);
};
findLongestWord('May the force be with you');
  