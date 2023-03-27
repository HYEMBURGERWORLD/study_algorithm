function solution(s) {
    let arr = s.toLowerCase().split(" ");
    return arr.map(v => v.charAt(0).toUpperCase() + v.substring(1)).join(" ");
}