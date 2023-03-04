function solution(n) {
    let answer = 0;
    
    // 피자 6조각
    // 나눠먹을 사람 n명
    
    let pizza = 6;

    while(pizza % n !== 0) {
        pizza += 6;
    }
    
    answer = pizza / 6;
    
    return answer;
}