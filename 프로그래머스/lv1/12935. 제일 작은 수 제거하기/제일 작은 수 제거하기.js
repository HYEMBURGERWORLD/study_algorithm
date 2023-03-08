function solution(arr) {
    let min = Math.min(...arr);
    if(arr.length !== 1) {
        return arr.filter(a => a !== min);
    }
    return [-1];
}