function solution(my_string) {

    const answer = my_string.split("").filter((item, i, arr) => arr.indexOf(item) === i).join("");
    return answer;
}