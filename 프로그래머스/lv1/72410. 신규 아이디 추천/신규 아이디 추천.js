function solution(new_id) {
    let answer = "";
    // 1단계 : 대문자 > 소문자로 치환
    answer = new_id.toLowerCase();
    // 2단계 알파벳 소문자, 숫자, 빼기, 밑줄, 마침표 제외한 모든 문자 제거 
    answer = answer.replace(/[^a-z0-9\-_.]/g, "");
    // 3단계 .가 2번 이상인 경우 . 하나로 바꾼다
    answer = answer.replace(/\.{2,}/g, ".");
    // 4단계 .가 처음이나 끝이면 제거
    if(answer[0] === ".") {
        answer = [...answer];
        answer[0] = "";
        answer = answer.join("");
    } else if(answer[answer.length-1] === ".") {
        answer = [...answer];
        answer[answer.length-1] = "";
        answer = answer.join("");
    }
    // 5단계 answer = "" 일 경우, new_id length 만큼 a를 넣는다.
    answer === "" ? answer = "a" : 0;
    
    // 6단계 16자 이상이면 15개까지만 남기고 나머지 제거 / 제거 후 .가 끝에 위치하면 .를 제거
    answer.length >= 16 ? answer = answer.slice(0, 15) : 0;
    if(answer[answer.length-1] === ".") {
        answer = [...answer];
        answer[answer.length-1] = "";
        answer = answer.join("");
    }
    // 7단계 2자 이하면, new_id 마지막 문자를 new_id 길이가 3이 될 때까지 반복해서 끝에 붙인다.
    answer.length <= 2 ? answer = answer.padEnd(3, answer[answer.length-1]) : 0;
    
    return answer;
}