var numWays = function(steps, arrLen, position=0) {
    let cache = {}
    const M = 1e9 + 7
    
    function numWays1(steps, position=0){
        let ways = 0
        if(position === steps) return 1
        if(position === steps - 1) return steps
        
        let key = steps + "-" + position
        if(cache[key]) return cache[key]
        
        if(position){ 
            ways += numWays1(steps - 1, position - 1)
        }
        if(position < arrLen-1){
            ways += numWays1(steps - 1, position + 1)
        }
        if(position < steps){
            ways += numWays1(steps - 1, position)
        }
        
        cache[key] = ways % M
        return cache[key]
    }
    
    return numWays1(steps)
};

module.exports = numWays
