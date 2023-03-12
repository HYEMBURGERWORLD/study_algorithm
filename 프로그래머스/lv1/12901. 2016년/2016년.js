function solution(a, b) {
    // 2016년은 윤년 (366일)
    const day = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    return day[new Date(`2016-${a}-${b}`).getDay()];
}