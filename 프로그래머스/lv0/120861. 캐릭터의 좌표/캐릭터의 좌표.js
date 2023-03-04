function solution(keyinput, board) {
    let x = 0;
    let y = 0;
    
    const limit = [Math.abs(Math.floor(board[0]/2)), Math.abs(Math.floor(board[1]/2))];
    
    for(let i of keyinput) {
        switch(i) {
            case "left" : x--; break;
            case "right" : x++; break;
            case "down" : y--; break;
            case "up" : y++; break;
        }
        
        if(Math.abs(x) > limit[0]) {
            x = x > 0 ? limit[0] : limit[0] * -1;
        } 
        if(Math.abs(y) > limit[1]) {
            y = y > 0 ? limit[1] : limit[1] * -1;
        }
    }
    

    
    return [x,y];
    
}