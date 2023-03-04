function solution(my_string) {
    
    let arr = my_string.toLowerCase();
    arr = arr.split("");
    return arr.sort().join("");
}