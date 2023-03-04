function solution(my_string) {
    
    const arr = my_string.split(" ");
    let answer = parseInt(arr[0]);
    
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] === "+") {
            answer += parseInt(arr[i+1]);
        } else if (arr[i] === "-") {
            answer -= parseInt(arr[i+1]);
        } else continue;
    }
    
    return answer;
}