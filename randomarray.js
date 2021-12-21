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