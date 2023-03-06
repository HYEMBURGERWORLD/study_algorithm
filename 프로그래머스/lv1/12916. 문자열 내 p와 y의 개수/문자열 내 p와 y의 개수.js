function solution(s){
    let p = 0;
    let y = 0;
    [...s].forEach(v => {
        if (v === "p" || v === "P") p++;
        else if (v === "y" || v === "Y") y++;
    })
    
    return p === y ? true : false;
}