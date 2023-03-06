function solution(n)
{
    let answer = 0;
    n.toString().split("").map(a => Number(a)).forEach(a => answer += a);
    return answer;
}