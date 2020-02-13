var minSteps = function(s, t) {
    let result = 0
    let stack = []
    
    const toDictionary = (str) => {
        let result = {}
        
        for(let i = 0, len = str.length; i < len; i++){
            if(result[str[i]] !== undefined){
                result[str[i]] += 1    
            } else {
                result[str[i]] = 1
            }
        }
        
        return result
    }
    
    const dict1 = toDictionary(s)
    const dict2 = toDictionary(t)
    
    for(let key in dict1){
        if(dict2[key] !== undefined){
            stack.push(dict1[key] - dict2[key])
        } else {
            stack.push(dict1[key])
        }
    }
    
    stack.map(c => {
        if(c > 0) {
            result += c
        }
    })
    
    return result  
};

module.exports = minSteps
