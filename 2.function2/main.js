
function reverse(str) {
    return str.split("").reverse().join("");
}

function f2(str){
    if(str==reverse(str)){
        return true
    }else return false
}