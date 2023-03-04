function solution(numbers, direction) {
    if (direction === "left") {
        const num_left = numbers.shift();
        numbers.push(num_left);
    } else {
        const num_right = numbers.pop();
        numbers.unshift(num_right);
    }
    return numbers;
}