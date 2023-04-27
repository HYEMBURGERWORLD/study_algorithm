function solution(sizes) {
    const width = [];
    const height = [];

    for(let i = 0; i < sizes.length; i++) {
        const min = Math.min(sizes[i][0], sizes[i][1]);
        const max = Math.max(sizes[i][0], sizes[i][1]);
        
        height.push(min);
        width.push(max);
    }

    return Math.max(...width) * Math.max(...height);
}