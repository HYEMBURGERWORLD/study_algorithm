function solution(participant, completion) {
    // 정렬
    participant = participant.sort();
    completion = completion.sort();
    
    for(let i = 0; i < participant.length; i++) {
        if(participant[i] !== completion[i]) {
            
            // 길이가 1 작으므로 값이 다르자마자 바로 return 하면 된다.
            return participant[i];
        }
    }
}