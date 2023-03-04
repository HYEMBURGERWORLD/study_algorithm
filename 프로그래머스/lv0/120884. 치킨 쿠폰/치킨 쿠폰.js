function solution(chicken) {
    let answer = 0;
    
    // 치킨 1마리 = 1쿠폰
    // 10 쿠폰 = 치킨 1마리
    // 서비스 치킨 = 1쿠폰 
    
    // 남은 쿠폰
    let coupon = 0;
    
    while(chicken >= 10) {
        coupon = chicken%10;
        answer += parseInt(chicken/10);
        chicken = parseInt(chicken/10) + coupon;
    }
        
    return answer;
}