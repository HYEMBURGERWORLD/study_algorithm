function solution(numbers) {
    const eng_num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    for (let i = 0; i < eng_num.length; i++) {
        numbers = numbers.split(eng_num[i]).join(i);
    }
    return parseInt(numbers);
}