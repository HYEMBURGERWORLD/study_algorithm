function solution(s) {
    const arr = s.split(" ");
    let str = "";
    let answer = [];
    
    arr.forEach(function(item){
       for(let i = 0; i < item.length; i++){
           if(item[i] === "") {
                str += "";
            } else if (i % 2 === 0) {
                str += item[i].toUpperCase();
            } else if (i % 2 !== 0) {
                str += item[i].toLowerCase();
            }
       }
        answer.push(str);
        str = "";
    });
    return answer.join(" ");
    
    
}