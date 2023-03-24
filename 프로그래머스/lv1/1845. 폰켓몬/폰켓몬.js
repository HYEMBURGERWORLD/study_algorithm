function solution(nums) {
    // 최대로 가질 수 있는 폰켓몬 종류 수 
    const max = nums.length / 2;
    
    // set 객체를 만들어서 중복 제거
    const arr = [...new Set(nums)];
    console.log(arr);

    return arr.length > max ? max : arr.length
}