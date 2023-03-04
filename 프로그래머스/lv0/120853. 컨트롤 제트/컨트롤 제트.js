function solution(s) {
    s = s.split(" ");
    let result = 0;
    for(let i = 0; i < s.length; i++) {
        if (s[i] === "Z") {
            result -= parseInt(s[i-1]);
            continue;
        }
        result += parseInt(s[i]);
    }

    return result;
}