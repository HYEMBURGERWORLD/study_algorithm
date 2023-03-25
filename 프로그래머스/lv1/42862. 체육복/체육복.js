function solution(n, lost, reserve) {
    // 앞번호 혹은 뒷번호 학생에게만 체육복을 빌려줄 수 잇음
    // 예) 4번 학생은 3번 혹은 5번학생에게만 빌려줄 수 있음 
    // 체육복 없으면 수업들을 수 없음, 적절히 빌려서 최대한 많은 수의 학생이 체육수업 들어야함
    
    // + 여벌 체육복을 가져온 학생(reserve)이 도난당할 경우 빌려줄 수 없음.
    
    // 전체 학생 n 
    // 도난 당한 배열 lost 
    // 여벌 체육복 가진 학생 번호 배열 reserve 
    
    let answer = n - lost.length;
    let newLost = lost.filter((v)=>!reserve.includes(v));
    let newReserve = reserve.filter((v)=>!lost.includes(v));
    answer+=lost.length-newLost.length;
    
    // 정렬
    newLost.sort((a,b)=>a-b);
    
    newLost.forEach((l)=>{
        if(newReserve.length===0){
            return;
        }
        if(newReserve.includes(l-1)){
            newReserve=newReserve.filter((v)=>v!==l-1);
            answer++;
        } else if(newReserve.includes(l+1)){
            newReserve=newReserve.filter((v)=>v!==l+1);
            answer++;
        }
    })
    
    return answer;
}