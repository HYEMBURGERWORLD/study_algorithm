function solution(s) {
    const arr = [...s].filter((item, i, arr) => arr.indexOf(item) === arr.lastIndexOf(item));
    return arr.sort().join("");
}