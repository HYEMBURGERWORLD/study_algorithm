function solution(quiz) {
    let answer = [];
    let num = 0;
    
    let arr = quiz.map(el => el.split(" "));
    
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            
            if(arr[i][j] === "-") {
                num = parseInt(arr[i][j-1]) - parseInt(arr[i][j+1]);
                num === parseInt(arr[i][j+3]) ? answer.push("O") : answer.push("X");
            } else if (arr[i][j] === "+") {
                num = parseInt(arr[i][j-1]) + parseInt(arr[i][j+1]);
                num === parseInt(arr[i][j+3]) ? answer.push("O") : answer.push("X");
            }
                        
        }
    }
    
    return answer;
    
}
