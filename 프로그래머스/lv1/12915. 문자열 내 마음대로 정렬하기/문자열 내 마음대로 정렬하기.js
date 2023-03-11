function solution(strings, n) {
    
    return strings.sort(function(a,b) {
        if(a[n] === b[n]) {
            let i = 0;
            while (a[i] === b[i]) {
                i++;
            }
            return a[i].charCodeAt() - b[i].charCodeAt();
        }
        return a[n].charCodeAt() - b[n].charCodeAt();
    });
    
    
}