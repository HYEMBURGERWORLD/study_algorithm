function solution(array) {
    let answer = 0;
    
    // 0. 배열 안 값이 하나 뿐이면 그 값이 가장 자주 나오는 값 = 답이 된다.
    if(array.length === 1) return array[0];
    

    let m = new Map(); // map 객체 만들기 (키, 값 쌍으로 기억)
    for(let i = 0; i < array.length; i++) {
        if (m.get(array[i]) === undefined) {
            m.set(array[i], 1);
        } else {
            let num = m.get(array[i]);
            m.set(array[i], num+1);
        }
    }
    
    // 크기 순 정렬
    m = [...m].sort((a,b) => b[1]-a[1]);
    console.log(m);
    
    // 테스트케이스 [1,1,1] 추가 후 변경
    m.length === 1 || m[0][1] > m[1][1] ? answer = m[0][0] : answer = -1;
    
    return answer;
}