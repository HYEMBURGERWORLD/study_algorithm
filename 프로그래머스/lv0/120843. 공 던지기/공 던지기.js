function solution(numbers, k) {
    const lnt = numbers.length;
    return numbers[2*(k-1)%lnt];
}