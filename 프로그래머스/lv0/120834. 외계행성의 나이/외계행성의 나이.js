function solution(age) {
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let answer = "";

    for(let i = 0; i < age.toString().length; i++) {
        answer += alphabet[parseInt(age.toString()[i])];
    }

    return answer;
    
}