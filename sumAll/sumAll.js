const sumAll = function(a,b) {
    let finalSum = 0
    if (typeof(a,b) !== 'number'){
        return "ERROR";
    }

    if (a < 0 || b < 0){
        return "ERROR";
    }
    else if(a<b){
        for (let i=a; i <= b; i++){
        finalSum += i}
    }
    else if (a>b){
        for (let i=b; i <= a; i++){
            finalSum += i}
        }
    return finalSum
}

module.exports = sumAll
