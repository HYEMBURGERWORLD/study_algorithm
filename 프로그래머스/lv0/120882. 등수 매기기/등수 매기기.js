function solution(score) {
    const scoreArr = score.map(([...arr]) => (arr[0] + arr[1]) / 2);
    const arr = score.map(([...arr]) => (arr[0] + arr[1]) / 2).sort((a, b) => b-a);
    return scoreArr.map(item => arr.indexOf(item)+1);
}