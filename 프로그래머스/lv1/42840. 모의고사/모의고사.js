function solution(answers) {
    const first = [1, 2, 3, 4, 5];
    const second = [2, 1, 2, 3, 2, 4, 2, 5];
    const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let student = [0, 0, 0]
    
    for(let i = 0; i < answers.length; i++) {
        if(first[i % first.length] === answers[i]) {
            student[0]++;
        }
        if(second[i % second.length] === answers[i]) {
            student[1]++;
        }
        if(third[i % third.length] === answers[i]) {
            student[2]++;
        }
    }
    
    // 제일 많이 맞은 문제 수
    const max = Math.max(...student);
    let answer = [];
    
    for(let j = 0; j < student.length; j++) {
        student[j] === max ? answer.push(j+1) : 0;
    }
    return answer;
}