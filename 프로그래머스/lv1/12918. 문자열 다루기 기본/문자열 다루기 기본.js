function solution(s) {
    // 1. length = 4 || length = 6 
    if(s.length === 4 || s.length === 6) {
        //2. 숫자로만 구성되어 있는가
        for (let i = 0; i < s.length; i++) {
           if(isNaN(s[i])) return false;
        }
        return true;
    }
    return false;
}