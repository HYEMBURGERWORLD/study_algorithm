function solution(polynomial) {
    // return할 변수(배열형태)
    let answer = [];
    
    // 주어진 배열 자르기
    let arr = polynomial.split(" + ");
    
    // x값을 담을 변수, 숫자 합을 담을 변수
    let x = 0;
    let num = 0;
    
    // 잘라둔 배열을 반복
    arr.forEach(item => {
        // 만약 x가 들어있다면 (x값)
        if(item.includes("x")) {
            // 계산에 도움되지 않는 x를 없앤다.
            let i = item.replace("x", "");
            // 만약 1x여서 i값에 공백만 남을경우, x값은 1
            i === "" ? x += 1 : x += Number(i);
        } else {
            num += Number(item);
        }
    })

    // x값이 1일 경우 배열에 x(1x)만 push, x가 아예 존재하지 않을 경우 push 하지 않음, 그외의 경우에는 (x값)x　를 push
    x === 1 ? answer.push("x") : x === 0 ? "" : answer.push(`${x}x`);
    
    // num 이 0이면 push　하지 않음, 아닐경우 그대로 push
    num === 0 ? "" : answer.push(num);
    
    // 배열에 들어간 값들을 join 메서드를 통해 연결하고 문자열로 return
    return answer.join(" + ");
}