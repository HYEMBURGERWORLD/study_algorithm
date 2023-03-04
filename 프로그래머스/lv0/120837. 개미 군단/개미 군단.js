function solution(hp) {
    // 1. 사냥감 체력에 딱 맞는 병력(===hp)
    // 2. 장군=5 / 병정=3 / 일=1
    
    let answer = 0;
    
    answer = Math.floor(hp / 5);
    hp -= answer * 5; 
    
    const byeong = Math.floor(hp/3);
    answer += byeong;
    hp -= byeong * 3;
    
    const il = Math.floor(hp/1);
    answer += il;
    
    return  answer;
}