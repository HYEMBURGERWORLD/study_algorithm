function solution(n) {
    let original = n.toString(2).match(/1/g).length;
    while(true) {
        n++; 
        let num = n.toString(2).match(/1/g).length;
        if(num === original) {
            return n;
        }
    }
}