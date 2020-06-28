const repeatString = function(string,times) {
    if (times < 0){
        return "ERROR"
    }
    let str = "";
    for (let i=0; i < times; i++){
        str += string;}
        return str;}

module.exports = repeatString
