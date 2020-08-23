function getnum(num){
    var result = document.getElementById("rep")
    result.value += num
}

function clearres(){
    var result = document.getElementById("rep")
    result.value = ""
}

function getresult(){
    var result = document.getElementById("rep")
    result.value = eval(result.value)
}