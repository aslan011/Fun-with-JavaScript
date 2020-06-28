const snakeCase = function(str) {
    // the below was added for the specific WTF case, replace 2 dots with a space
    str = str.replace(/\.\./g, " ");
    // the below was added for the specific camelCase case, if there is no whitespace, it replaces any capital letters with a space and the capital letter
    if (str.indexOf(" ") < 0) {
        str = str.replace(/([A-Z])/g, " $1"); //$1 is backreference to the first match
      }

    // the main regex expression, first replace all non-letter with a space, then replaces all whitespace with a _, finally had to add additional part to capture the _ at the end of the string
    //note - [^] ( within [ ] ) is negation in regular expression whereas ^ is "begining of string"
    return(str.replace(/[^\w]/g, " ")
    .replace(/\s+/g, "_").replace(/_$/g, "").toLowerCase())

}

snakeCase('This is the song that never ends....')
module.exports = snakeCase
