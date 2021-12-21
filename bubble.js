function randomNumberArray(num,min,max){
    
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
    }
    result=[]
    for(i=0;i<num;i++){
        result.push(getRandomInt(min, max))
    }
    return result
}
let bubbleSort = function (arr) {
    // TODO: 여기에 코드를 작성합니다.
    let temp
    for(let j=0;j<arr.length;j++){
      for(let i=0;i<arr.length-1-j;i++){
       if(arr[i]<=arr[i+1])0;
       else {
         temp=arr[i]
         arr[i]=arr[i+1]
         arr[i+1]=temp
         }
      }
    }
    return arr
  };
  console.log(bubbleSort(randomNumberArray(80000,1,100000)))