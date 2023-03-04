function solution(my_string) {
    var answer = '';
    
    for (let i = 0; i < my_string.length; i++) {
        let str = my_string[i]
        
        if(str !== str.toUpperCase()){
            answer += str.toUpperCase();
        } else if (str !== str.toLowerCase()) {
            answer += str.toLowerCase();
        }
    }
    
    return answer;
}