function solution(letter) {
    let answer = "";
    const arr = letter.split(" ");
    const mos = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    const abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    
    for(let i = 0; i < arr.length; i++) {
        const whatIndex = mos.indexOf(arr[i]);
        answer += abc[whatIndex];
    }
    
    return answer;
}